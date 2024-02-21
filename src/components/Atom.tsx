import { useEffect, Suspense, useState, lazy, SetStateAction, Dispatch } from "react"
import { motion, useAnimation, useInView } from "framer-motion";

import Electron from "../components/animated/Electron";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Orbit from "@/components/animated/Orbit";

const AtomCore = lazy(()=> import("@/components/animated/AtomCore"));
const orbitRadius = 2.5;
const electronOrbit = 2.5

function Rig({mouseClicked}: {mouseClicked: boolean}) {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    // if(mouseClicked) camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.05)
    camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

  const orbits = {
    "python" : {
      "x": (date: number)=> (((Math.cos(date)) * (electronOrbit))*0.7),
      "y": (date: number)=> ((((Math.cos(date)) * (electronOrbit))*0.65)),
      "z": (date: number)=>((Math.sin(date)) * (electronOrbit)*0.9)+0.4,
      "texture": "/images/python.png",
    },
    "js" : {
      "x": (date: number)=> -(((Math.cos(date-2)) * (electronOrbit))*0.7),
      "y": (date: number)=> ((((Math.cos(date-2)) * (electronOrbit))*0.65)),
      "z": (date: number)=>((Math.sin(date-2)) * (electronOrbit*0.9)+0.4),
      "texture": "/images/js.png",
    },
    "aws" : {
      "x": (date: number)=> -(((Math.cos(date-4)) * (electronOrbit))),
      "y": (date: number)=> 0,
      "z": (date: number)=>((Math.sin(date-4)) * (electronOrbit*0.9)+0.4),
      "texture": "/images/aws.png",
    }

  }
export default function Atom({gltf}: {gltf: any}){
  const [mouseClicked, setMouseClicked] = useState(false);
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
  return (
          <motion.div className={`w-full h-full`} variants={animation} 
            transition={{ duration: 2, delay: 0.3 }}
            initial= "hidden"
            animate="visible"
            onMouseDown={()=>setMouseClicked(true)}
            onMouseUp={()=>setMouseClicked(false)}
            >
              <Canvas >
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <mesh rotation={[0,-0.15,0]} >

                  <Electron position={new Vector3(0, 0, 0)} orbit={orbits["python"]} />
                  <Electron position={new Vector3(0, 0, 0)} orbit={orbits["js"]} />
                  <Electron position={new Vector3(0, 0, 0)} orbit={orbits["aws"]} />
                  <AtomCore gltf={gltf}></AtomCore>
                  <Orbit radius={orbitRadius} rotation={[Math.PI/2, Math.PI/4, 0]}></Orbit>
                  <Orbit radius={orbitRadius} rotation={[-Math.PI/2, Math.PI/4, 0]}></Orbit>
                  <Orbit radius={orbitRadius} rotation={[Math.PI/2, 0, 0]}></Orbit>
                  </mesh>
                  <Rig mouseClicked={mouseClicked}/>
                </Canvas>

          </motion.div>
  )

}

