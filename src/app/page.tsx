"use client"
import { useEffect, useRef, useState, lazy } from "react"
import { motion, useAnimation, useInView } from "framer-motion";
import Electron from "../components/animated/Electron";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Orbit from "@/components/animated/Orbit";

const orbitRadius = 2.5;
const electronOrbit = 2.5

const AtomCore = lazy(()=> import("@/components/animated/AtomCore"));

function Rig({mouseClicked}: {mouseClicked: boolean}) {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    // if(mouseClicked) camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.05)
    camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

export default function Home() {
  const [title, setTitle] = useState(<>Hi, I'm Andres</>);  
  const [display, setDisplay]= useState(false);
  const [mouseClicked, setMouseClicked] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls= useAnimation();
  useEffect(()=>{
    if (isInView) mainControls.start("visible")
  }, [isInView])

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
      // "y": (date: number)=> 0,
      "z": (date: number)=>((Math.sin(date-2)) * (electronOrbit*0.9)+0.4),
      "texture": "/images/js.png",
    },
    "aws" : {
      "x": (date: number)=> -(((Math.cos(date-4)) * (electronOrbit))),
      // "y": (date: number)=> ((((Math.cos(date-2)) * (electronOrbit))*0.65)),
      y: (date: number)=> 0,
      // "y": (date: number)=> 0,
      "z": (date: number)=>((Math.sin(date-4)) * (electronOrbit*0.9)+0.4),
      "texture": "/images/aws.png",
    }

  }

  return (
    <main>
      <div className="lg:flex min-h-screen justify-between p-10 xl:pl-24 bg-background h-100 " ref={ref}>
        <div className="h-100 flex items-center justify-center">
            <motion.div className="w-100 " variants={{
              hidden: {
                opacity: 0, y: 75
              },
              visible: {
                opacity: 1, y: 0
              }
            }} 
            transition={{ duration: 1, delay: 0.3 }}
            initial= "hidden"
            animate="visible"
            onAnimationComplete={()=>{setDisplay(true)}}
            >
            <div className="mb-24 flex flex-col items-center lg:items-start">
              <h1 className="text-center lg:text-left text-5xl xl:text-7xl font-bold mb-2 sm:truncate">
                {title}
              </h1>
              <p>Full Stack Developer</p>
            </div>
          </motion.div>
        </div>
        <div className="h-100 w-100 lg:w-2/3 lg:flex items-center justify-center">

        <div className="h-[400px] md:h-[550px] lg:h-[600px] xl:h-full xl:w-[80%]  ">

          {
            display && (
            <motion.div className="w-full h-full" variants={{
              hidden: {
                opacity: 0,
                // scale: 0.5
              },
              visible: {
                opacity: 1,
                // scale: 2
              }
            }} 
            transition={{ duration: 1, delay: 0.3 }}
            initial= "hidden"
            animate="visible"
            onAnimationComplete={()=>{setDisplay(true)}}
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
                  <AtomCore></AtomCore>
                  <Orbit radius={orbitRadius} rotation={[Math.PI/2, Math.PI/4, 0]}></Orbit>
                  <Orbit radius={orbitRadius} rotation={[-Math.PI/2, Math.PI/4, 0]}></Orbit>
                  <Orbit radius={orbitRadius} rotation={[Math.PI/2, 0, 0]}></Orbit>
                  </mesh>
                  <Rig mouseClicked={mouseClicked}/>
              </Canvas>

</motion.div>
            )

          }
        </div>
      </div>
        </div>
    </main>
  );
}
