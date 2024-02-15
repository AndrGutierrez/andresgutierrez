import React, { useRef, Suspense } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function AtomCore(props: any) {
  const group = useRef();
  // const { nodes, materials, animations } = useGLTF("https://andresgutierrezassets.s3.amazonaws.com/optimized_heart.glb");
  const { nodes, materials, animations } = useGLTF("crystal_heart.glb");
  const { actions } = useAnimations(animations, group);
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
