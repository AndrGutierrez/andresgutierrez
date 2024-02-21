import React, { useRef, Suspense, useEffect, SetStateAction, Dispatch } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function AtomCore({gltf}: {gltf: any}) {
  const group = useRef<THREE.Group>();
  const mesh = useRef<THREE.Mesh>(null!)
  // const { animations, scene } = useGLTF("https://s3.amazonaws.com/www.andresgutierrez.me/crystal_heart.glb");
  const { nodes, materials, animations, scene} = gltf;
  useFrame((state, delta) => {
    const date = Date.now() * 0.001;
    const scale = 1 + Math.exp(Math.sin(date)-2.5)
    mesh.current.scale.set(scale, scale, scale)
  })
  return (

    <Suspense>

      <mesh ref={mesh}>
        <primitive object={scene} position={[0,-1,0]}></primitive>
      </mesh>
    </Suspense>
  );
}

