import React, { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";

export default function AtomCore({ gltf }: { gltf: any }) {
  const mesh = useRef<THREE.Mesh>(null!)
  const { scene } = gltf;
  useFrame((state, delta) => {
    const date = Date.now() * 0.001;
    const scale = 1 + Math.exp(Math.sin(date) - 2.5)
    mesh.current.scale.set(scale, scale, scale)
  })

  return (

    <mesh ref={mesh}>
      <primitive object={scene} position={[0, -1, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
      <meshPhongMaterial color="white" opacity={0.1} transparent />
    </mesh>
  );
}

