import type { Metadata } from "next";
import KasirProDemo from "@/components/demo/KasirProDemo";

export const metadata: Metadata = {
  title: "KasirPro — Demo oleh Wafinix",
  robots: { index: false },
};

export default function Page() {
  return <KasirProDemo />;
}
