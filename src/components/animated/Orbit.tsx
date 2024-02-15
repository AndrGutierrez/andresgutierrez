import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { BufferGeometry, Euler, RingGeometry, TorusGeometry, Vector3 } from "three";

type PropTypes = {
  radius: number
  rotation: Euler
}
export default function Ring({radius, rotation}: PropTypes) {
   const ref = useRef(null);
   // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  
//   const points = [];
//   for (let index = 0; index < 64; index++) {
//     const angle = (index / 64) * 2 * Math.PI;
//     const x = 2.5 * Math.cos(angle);
//     const z = 2.5 * Math.sin(angle);
//     points.push(new Vector3(x, 0, z));
//   }
// points.push(points[0]);
// const lineGeometry = new BufferGeometry().setFromPoints(points);
//   return (
//     <line geometry={lineGeometry} rotation={[0, 0.2, 0.785]}>
//       <lineBasicMaterial attach="material"  color="white" linewidth={10} />
//     </line>
//   );

  // function getCenterPoint() {
  //   if (ref.current){}
  //   var geometry = ref.current.geometry;
  //   geometry.computeBoundingBox();
  //   var center = new THREE.Vector3();
  //   geometry.boundingBox.getCenter( center );
  //   mesh.localToWorld( center );
  //   return center;
  // }
  useEffect(()=>{
    // if (ref.current) ref.current.rotation.order="ZXY"
    // ref.current.rotation.z=0.1;
  }, [])
   return (
      <mesh
         visible
         position={[0.15, 0.15, 0]}
         // rotation={[-1.57, 0.785, 0.785]}
         // rotation={[1, 0.785, 0.785]}
         rotation={rotation}
         castShadow
         ref={ref}>
          <torusGeometry args={[radius, 0.05]} />
          <meshBasicMaterial attach="material" color="white" />
      </mesh>
   );
}
