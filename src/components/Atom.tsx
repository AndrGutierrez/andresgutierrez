import { useEffect, Suspense, useState, lazy, SetStateAction, Dispatch, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion";
import { useGLTF, useAnimations } from "@react-three/drei";

import Electron from "../components/animated/Electron";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Orbit from "@/components/animated/Orbit";

const AtomCore = lazy(() => import("@/components/animated/AtomCore"));
const orbitRadius = 3;
const electronOrbit = 3

function Rig({ mouseClicked }: { mouseClicked: boolean }) {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    // if(mouseClicked) camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.05)
    camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

const orbits = {
  "python": {
    "x": (date: number) => (((Math.cos(date)) * (electronOrbit)) * 0.7),
    "y": (date: number) => ((((Math.cos(date)) * (electronOrbit)) * 0.65)),
    "z": (date: number) => 0.7 * ((Math.sin(date)) * (electronOrbit) * 0.9) + 0.4,
    "texture": "/images/python.png",
  },
  "js": {
    "x": (date: number) => -(((Math.cos(date - 2)) * (electronOrbit)) * 0.7),
    "y": (date: number) => ((((Math.cos(date - 2)) * (electronOrbit)) * 0.65)),
    "z": (date: number) => 0.7 * ((Math.sin(date - 2)) * (electronOrbit * 0.9) + 0.4),
    "texture": "/images/js.png",
  },
  "aws": {
    "x": (date: number) => -(((Math.cos(date - 4)) * (electronOrbit))),
    "y": (date: number) => 0,
    "z": (date: number) => 0.7 * ((Math.sin(date - 4)) * (electronOrbit * 0.9) + 0.4),
    "texture": "/images/aws.png",
  }

}
export default function Atom() {
  const [scale, setScale] = useState(1)
  const [mouseClicked, setMouseClicked] = useState(false);
  const gltf = useGLTF("crystal_heart_compressed.glb");
  // const gltf = useGLTF("bubble_heart.glb");
  const mesh = useRef<THREE.Mesh>(null);
  const animation = {
    hidden: {
      opacity: 0,
      // scale: 0.5
    },
    visible: {
      opacity: 1,
      // scale: 2
    }
  }
  const [opacity, setOpacity] = useState(0);
  const [counter, setCounter] = useState(1);
  useFrame((state, delta) => {
    if (opacity <= 1) {
      setCounter((prev) => (prev + 0.01))
      setOpacity((prev) => ((Math.log(prev + counter))))
    }
  })
  useEffect(() => {

    if (window.innerWidth >= 450 && window.innerWidth <= 1024) {
      setScale(1.3)
    }
    else {
      setScale(1)
    }
    window.addEventListener("resize", (e) => {
      // console.log(window.innerWidth)
      if (window.innerWidth >= 450 && window.innerWidth <= 1024) {
        setScale(1.3)
      }
      else {
        setScale(1)
      }
    })
  }, [])
  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <mesh rotation={[0.15, -0.3, 0]} ref={mesh} scale={[scale, scale, scale]} >
        <Electron position={new Vector3(0, 0, 0)} orbit={orbits["python"]} opacity={opacity} />
        <Electron position={new Vector3(0, 0, 0)} orbit={orbits["js"]} opacity={opacity} />
        <Electron position={new Vector3(0, 0, 0)} orbit={orbits["aws"]} opacity={opacity} />
        <AtomCore gltf={gltf}></AtomCore>
        <Orbit radius={orbitRadius} rotation={[Math.PI / 2, Math.PI / 4, 0]} ></Orbit>
        <Orbit radius={orbitRadius} rotation={[-Math.PI / 2, Math.PI / 4, 0]} ></Orbit>
        <Orbit radius={orbitRadius} rotation={[Math.PI / 2, 0, 0]} ></Orbit>

      </mesh>
      <Rig mouseClicked={mouseClicked} />

    </>
  )

}

