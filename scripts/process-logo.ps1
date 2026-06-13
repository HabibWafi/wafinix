# Process Wafinix brand source images into derived assets.
# - Removes the solid background (edge flood-fill, preserves interior cream wings)
# - Produces transparent marks
# - Generates favicon.ico / icon.png / apple-icon.png into src/app
#
# Re-run after replacing source files in public/brand:
#   powershell -ExecutionPolicy Bypass -File scripts/process-logo.ps1

Add-Type -AssemblyName System.Drawing

$root = Split-Path $PSScriptRoot -Parent
$brand = Join-Path $root "public\brand"
$appDir = Join-Path $root "src\app"

function Remove-EdgeBackground {
    param([string]$InPath, [string]$OutPath, [int]$Tolerance = 100)
    $bmp = New-Object System.Drawing.Bitmap($InPath)
    $w = $bmp.Width; $h = $bmp.Height
    $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
    $data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $len = $data.Stride * $h
    $bytes = New-Object byte[] $len
    [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $len)
    $stride = $data.Stride
    # reference background color = top-left corner (BGRA)
    $bB = $bytes[0]; $bG = $bytes[1]; $bR = $bytes[2]
    $visited = New-Object bool[] ($w * $h)
    $stack = New-Object System.Collections.Generic.Stack[int]
    for ($x = 0; $x -lt $w; $x++) { $stack.Push($x); $stack.Push($x + ($h - 1) * $w) }
    for ($y = 0; $y -lt $h; $y++) { $stack.Push($y * $w); $stack.Push(($w - 1) + $y * $w) }
    while ($stack.Count -gt 0) {
        $idx = $stack.Pop()
        if ($visited[$idx]) { continue }
        $visited[$idx] = $true
        $x = $idx % $w; $y = [int]($idx / $w)
        $i = $y * $stride + $x * 4
        $d = [math]::Abs($bytes[$i] - $bB) + [math]::Abs($bytes[$i + 1] - $bG) + [math]::Abs($bytes[$i + 2] - $bR)
        if ($d -le $Tolerance) {
            $bytes[$i + 3] = 0
            if ($x -gt 0) { $n = $idx - 1; if (-not $visited[$n]) { $stack.Push($n) } }
            if ($x -lt $w - 1) { $n = $idx + 1; if (-not $visited[$n]) { $stack.Push($n) } }
            if ($y -gt 0) { $n = $idx - $w; if (-not $visited[$n]) { $stack.Push($n) } }
            if ($y -lt $h - 1) { $n = $idx + $w; if (-not $visited[$n]) { $stack.Push($n) } }
        }
    }
    [System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $len)
    $bmp.UnlockBits($data)
    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "  bg-removed -> $OutPath"
}

function New-FittedBitmap {
    param([string]$SrcPath, [int]$Size, [int]$Pad, $BgColor = $null)
    $src = New-Object System.Drawing.Bitmap($SrcPath)
    $dst = New-Object System.Drawing.Bitmap($Size, $Size)
    $g = [System.Drawing.Graphics]::FromImage($dst)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    if ($null -ne $BgColor) { $g.Clear($BgColor) } else { $g.Clear([System.Drawing.Color]::Transparent) }
    $avail = $Size - 2 * $Pad
    $scale = [math]::Min($avail / $src.Width, $avail / $src.Height)
    $dw = [int]($src.Width * $scale); $dh = [int]($src.Height * $scale)
    $dx = [int](($Size - $dw) / 2); $dy = [int](($Size - $dh) / 2)
    $g.DrawImage($src, (New-Object System.Drawing.Rectangle($dx, $dy, $dw, $dh)))
    $g.Dispose(); $src.Dispose()
    return $dst
}

function Save-Png { param($Bmp, [string]$Path) $Bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png); Write-Host "  png -> $Path" }

function Save-Ico {
    param([string]$OutPath, [int[]]$Sizes, [string]$SrcPath)
    $pngs = @()
    foreach ($s in $Sizes) {
        $bm = New-FittedBitmap -SrcPath $SrcPath -Size $s -Pad ([int]($s * 0.06))
        $ms = New-Object System.IO.MemoryStream
        $bm.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
        $pngs += , @{ Size = $s; Bytes = $ms.ToArray() }
        $ms.Dispose(); $bm.Dispose()
    }
    $fs = New-Object System.IO.FileStream($OutPath, [System.IO.FileMode]::Create)
    $bw = New-Object System.IO.BinaryWriter($fs)
    $bw.Write([uint16]0); $bw.Write([uint16]1); $bw.Write([uint16]$pngs.Count)
    $offset = 6 + 16 * $pngs.Count
    foreach ($p in $pngs) {
        $dim = if ($p.Size -ge 256) { 0 } else { $p.Size }
        $bw.Write([byte]$dim); $bw.Write([byte]$dim); $bw.Write([byte]0); $bw.Write([byte]0)
        $bw.Write([uint16]1); $bw.Write([uint16]32)
        $bw.Write([uint32]$p.Bytes.Length); $bw.Write([uint32]$offset)
        $offset += $p.Bytes.Length
    }
    foreach ($p in $pngs) { $bw.Write($p.Bytes) }
    $bw.Flush(); $bw.Close(); $fs.Close()
    Write-Host "  ico -> $OutPath"
}

Write-Host "Removing backgrounds..."
Remove-EdgeBackground -InPath (Join-Path $brand "icon.png") -OutPath (Join-Path $brand "mark.png")
Remove-EdgeBackground -InPath (Join-Path $brand "logo-utama.png") -OutPath (Join-Path $brand "logo-stacked.png")

Write-Host "Generating favicons into src/app..."
$mark = Join-Path $brand "mark.png"

$icon = New-FittedBitmap -SrcPath $mark -Size 512 -Pad 36
Save-Png $icon (Join-Path $appDir "icon.png"); $icon.Dispose()

# Apple home-screen icon: terracotta phoenix mark on a warm sand square (Apple masks corners).
$sand = [System.Drawing.Color]::FromArgb(255, 241, 232, 220)  # #F1E8DC
$apple = New-FittedBitmap -SrcPath $mark -Size 180 -Pad 24 -BgColor $sand
Save-Png $apple (Join-Path $appDir "apple-icon.png"); $apple.Dispose()

Save-Ico -OutPath (Join-Path $appDir "favicon.ico") -Sizes @(16, 32, 48) -SrcPath $mark

Write-Host "Done."
