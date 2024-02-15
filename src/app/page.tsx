"use client"
import { useEffect, useRef, useState, lazy } from "react"
import { motion, useAnimation, useInView } from "framer-motion";
import Electron from "../components/animated/Electron";
import { Canvas } from "@react-three/fiber";
import { Euler, Vector3 } from "three";
import Orbit from "@/components/animated/Orbit";
const AtomCore = lazy(()=> import("@/components/animated/AtomCore"));

const orbitRadius = 2.5;
const electronOrbit = 2.5
export default function Home() {
  const [title, setTitle] = useState(<>Full Stack <br /> Developer</>);  
  const [display, setDisplay]= useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls= useAnimation();
  useEffect(()=>{
    if (isInView) mainControls.start("visible")
  }, [isInView])

  const orbits = {
    "python" : {
      // "x": (date: number)=> ((Math.cos(date)) * (electronOrbit-0.8) + Math.cos(date)),
      // "y": (date: number)=> ((Math.cos(date)) * (electronOrbit-0.8)) +Math.cos(date),
      "x": (date: number)=> (((Math.cos(date)) * (electronOrbit))*0.7),
      "y": (date: number)=> ((((Math.cos(date)) * (electronOrbit))*0.65)+Math.sin(date)/2),
      "z": (date: number)=>((Math.sin(date)) * (electronOrbit)*0.9)+0.3,
      // "x": (date: number)=> -(electronOrbit-1.1),
      // "x": (date: number)=>0,
      // "y": (date: number)=> 0,
      // "z": (date: number)=> 0,
      "texture": "/images/python.png",
    },
        "js" : {
      "x": (date: number)=> -(((Math.cos(date)) * (electronOrbit))*0.7),
      "y": (date: number)=> ((((Math.cos(date)) * (electronOrbit))*0.65)+Math.sin(date)/2),
      "z": (date: number)=>((Math.sin(date)) * (electronOrbit)*0.9)+0.3,
      "texture": "/images/js.png",
    }

  }

  return (
    <main>
      <div className="flex min-h-screen justify-between p-10 xl:pl-24 bg-background h-100" ref={ref}>
          <div className="h-100 flex items-center">
            <motion.div className="w-100 md:w-1/3 xl:1/5" variants={{
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
            <h1 className="text-center md:text-left text-5xl md:text-5xl xl:text-8xl font-bold mb-24  ">
              {title}
            </h1>
          </motion.div>
        </div>
        <div className="h-100 md:w-2/3 xl:4/5">

          {
            display && (
        <Canvas >
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Electron position={new Vector3(0, 0, 0)} orbit={orbits["python"]} />
          <Electron position={new Vector3(0, 0, 0)} orbit={orbits["js"]} />
          <AtomCore></AtomCore>
                {
                  /*
                   
          <Orbit radius={orbitRadius} rotation={[1.57, 0.785, 0]}></Orbit>
          <Orbit radius={orbitRadius} rotation={[0, 0, 0, 0]}></Orbit>
          <Orbit radius={orbitRadius} rotation={[-1.57, 0.785, 0]}></Orbit>

                   */
                }
                <Orbit radius={orbitRadius} rotation={[1.374, 0.758, 0]}></Orbit>
                <Orbit radius={orbitRadius} rotation={[-1.374, 0.758, 0]}></Orbit>
                {/* <Orbit radius={orbitRadius} rotation={[1.374, 0.758, 0]}></Orbit>*/}
        </Canvas>

            )
          }
        </div>
      </div>
    </main>
  );
}
