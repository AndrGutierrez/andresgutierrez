import React, { useRef, Suspense } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function AtomCore(props: any) {
  const group = useRef<THREE.Group>();
  const mesh = useRef<THREE.Mesh>(null!)
  // const { nodes, materials, animations } = useGLTF("https://andresgutierrezassets.s3.amazonaws.com/optimized_heart.glb");
  
  const { nodes, materials, animations } = useGLTF("crystal_heart.glb");
  const { actions } = useAnimations(animations, group);
  useFrame((state, delta) => {
    const date = Date.now() * 0.001;
    const scale = 1 + Math.exp(Math.sin(date)-2.5)
    console.log(scale)
    // console.log(date)
    mesh.current.scale.set(scale, scale, scale)
    
  })
  return (
      <Suspense fallback={null}>

      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Crystal_Heartfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="Crystal_Heart"
                    position={[0, 0, 0]}
                    scale={0.01}
                  >
                    <mesh
                      name="Crystal_Heart_Crystal_Heart_Mat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Crystal_Heart_Crystal_Heart_Mat_0.geometry}
                      material={materials.Crystal_Heart_Mat}
                      position={[0, 0, 0]}
                      rotation={[0, -0.2, 0]}
                      // scale={[1, 1, 1]}
                      ref={mesh}
                      // rotateX={Math.PI / 2}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </Suspense>
  );
}

  // useGLTF.preload("https://andresgutierrezassets.s3.amazonaws.com/optimized_heart.glb");

  useGLTF.preload("crystal_heart.glb");
