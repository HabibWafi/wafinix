"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { QuadraticBezierLine } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const R = 1;

function latLngToVec3(lat: number, lng: number, r = R) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  );
}

// [lat, lng] of a few hubs — arcs all originate from Jakarta.
const JAKARTA: [number, number] = [-6.2, 106.8];
const DESTS: [number, number][] = [
  [1.35, 103.8], // Singapore
  [35.7, 139.7], // Tokyo
  [25.2, 55.3], // Dubai
  [51.5, -0.12], // London
  [40.7, -74], // New York
  [-33.9, 151.2], // Sydney
];

function DotSphere() {
  const positions = useMemo(() => {
    const N = 900;
    const arr = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const phi = i * Math.PI * (3 - Math.sqrt(5));
      arr[i * 3] = Math.cos(phi) * radius * R;
      arr[i * 3 + 1] = y * R;
      arr[i * 3 + 2] = Math.sin(phi) * radius * R;
    }
    return arr;
  }, []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#C8623E"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function Arc({ a, b }: { a: THREE.Vector3; b: THREE.Vector3 }) {
  const mid = a.clone().add(b).normalize().multiplyScalar(R * 1.4);
  return (
    <QuadraticBezierLine
      start={a}
      end={b}
      mid={mid}
      color="#E3A547"
      lineWidth={1.4}
      transparent
      opacity={0.85}
    />
  );
}

function CityDot({
  p,
  highlight = false,
}: {
  p: THREE.Vector3;
  highlight?: boolean;
}) {
  return (
    <mesh position={p}>
      <sphereGeometry args={[highlight ? 0.04 : 0.022, 16, 16]} />
      <meshBasicMaterial color={highlight ? "#C8623E" : "#E3A547"} />
    </mesh>
  );
}

function GlobeGroup() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.08;
  });
  const jakarta = latLngToVec3(JAKARTA[0], JAKARTA[1]);
  const dests = useMemo(() => DESTS.map((c) => latLngToVec3(c[0], c[1])), []);
  return (
    <group ref={ref} rotation={[0.3, -1.2, 0]}>
      <DotSphere />
      <CityDot p={jakarta} highlight />
      {dests.map((d, i) => (
        <group key={i}>
          <CityDot p={d} />
          <Arc a={jakarta} b={d} />
        </group>
      ))}
    </group>
  );
}

// Dotted globe with connection arcs from Jakarta — visualizes the Indonesia &
// global reach. Loaded via dynamic ssr:false.
export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 42 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1} />
      <GlobeGroup />
    </Canvas>
  );
}
