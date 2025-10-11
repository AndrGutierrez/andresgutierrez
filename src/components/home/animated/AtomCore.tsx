import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, MeshPhongMaterial } from "three";
import { useRenderStore } from "@/store";

export default function AtomCore({ gltf }: { gltf: any }) {
  const mesh = useRef<Mesh>(null!);
  const { rendered, setRendered } = useRenderStore()
  const { scene } = gltf;

  const material = useMemo(() =>
    new MeshPhongMaterial({
      color: "white",
      opacity: 0.1,
      transparent: true
    }),
    []);

  useFrame(() => {
    if (!mesh.current) return;

    const time = performance.now() * 0.001;
    const scale = 1 + Math.exp(Math.sin(time) - 2.5);

    mesh.current.scale.setScalar(scale);
  });

  useEffect(() => {
    setInterval(() => {
      console.log("message")
      self.postMessage({ type: 'SET_RENDERED', value: true })
    }
      , 1000)
  }, []);
  return (
    <mesh ref={mesh}>
      <primitive
        object={scene}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
