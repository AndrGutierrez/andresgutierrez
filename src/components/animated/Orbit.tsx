import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { BufferGeometry, Euler, RingGeometry, TorusGeometry, Vector3 } from "three";

type PropTypes = {
  radius: number
  rotation: Array<number>
  opacity: number
}
export default function Ring({radius, rotation, opacity}: PropTypes) {
   const ref = useRef(null);
  useEffect(()=>{
    // if (ref.current) ref.current.rotation.order="ZXY"
    // ref.current.rotation.z=0.1;
  }, [])
   return (
      <mesh
         visible
         rotation={new Euler(...rotation)}
         castShadow
         ref={ref}>
          <torusGeometry args={[radius, 0.05]} />
          <meshBasicMaterial attach="material" color="white" />
          <meshPhongMaterial color="white" opacity={opacity} transparent />
      </mesh>
   );
}
