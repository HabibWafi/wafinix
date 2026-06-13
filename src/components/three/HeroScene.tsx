"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, type ReactNode } from "react";
import * as THREE from "three";

// Group that eases toward the pointer for a subtle "look-at-cursor" feel.
function Rig({ children }: { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const ty = state.pointer.x * 0.5;
    const tx = -state.pointer.y * 0.3;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, ty, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, tx, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

// Warm, premium floating composition for the hero. Procedural (no assets) per
// docs note — image generation isn't available. Loaded via dynamic ssr:false.
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 6]} intensity={1.4} color="#FFEBD6" />
      <directionalLight position={[-6, -2, -2]} intensity={0.5} color="#E3A547" />

      <Rig>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.7}>
          <mesh>
            <icosahedronGeometry args={[1.5, 5]} />
            <MeshDistortMaterial
              color="#C8623E"
              roughness={0.35}
              metalness={0.08}
              distort={0.32}
              speed={1.4}
            />
          </mesh>
        </Float>

        <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.4}>
          <mesh position={[2.6, 1.1, -0.5]} rotation={[0.4, 0.2, 0]}>
            <torusGeometry args={[0.5, 0.2, 16, 60]} />
            <meshStandardMaterial color="#E3A547" roughness={0.4} />
          </mesh>
        </Float>

        <Float speed={1.3} rotationIntensity={1.5} floatIntensity={1.2}>
          <mesh position={[-2.7, -1.1, -0.5]}>
            <icosahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial color="#8A9B7C" roughness={0.5} flatShading />
          </mesh>
        </Float>

        <Float speed={2.2} rotationIntensity={1} floatIntensity={1.6}>
          <mesh position={[2.1, -1.5, 0.6]} rotation={[0.3, 0.5, 0.1]}>
            <dodecahedronGeometry args={[0.42, 0]} />
            <meshStandardMaterial color="#E08D63" roughness={0.45} flatShading />
          </mesh>
        </Float>

        <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.3}>
          <mesh position={[-2.2, 1.4, 0.3]}>
            <torusGeometry args={[0.3, 0.12, 14, 40]} />
            <meshStandardMaterial color="#C8623E" roughness={0.4} />
          </mesh>
        </Float>
      </Rig>
    </Canvas>
  );
}
