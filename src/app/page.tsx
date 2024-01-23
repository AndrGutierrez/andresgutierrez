"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion";
import Electron from "../components/animated/Electron";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";

const orbitRadius = 2.5;
export default function Home() {
  const [title, setTitle] = useState(<>Full Stack <br /> Developer</>);  
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls= useAnimation();
  useEffect(()=>{
    if (isInView) mainControls.start("visible")
  }, [isInView])

  const orbits = {
    "python" : {
      "x": (date: number)=> Math.cos(date) * orbitRadius,
      "y": (date: number)=> Math.cos(date) * orbitRadius,
      "z": (date: number)=>Math.sin(date) * orbitRadius,
      "texture": "/images/python.png",
    },
        "js" : {
      "x": (date: number)=> -Math.cos(date-1) * orbitRadius,
      "y": (date: number)=> Math.cos(date-1) * orbitRadius,
      "z": (date: number)=> Math.sin(date-1) * orbitRadius,
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
              transition={{ duration: 0.5, delay: 0.3 }}
            initial= "hidden"
            animate="visible"
            >
            <h1 className="text-center md:text-left text-5xl md:text-5xl xl:text-8xl font-bold mb-24  ">
              {title}
            </h1>
          </motion.div>
        </div>
        <div className="h-100 md:w-2/3 xl:4/5">

        <Canvas >
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Electron position={new Vector3(-1.2, 0, 0)} orbit={orbits["python"]} />
          <Electron position={new Vector3(5, 0, 0)} orbit={orbits["js"]} />
        </Canvas>
        </div>
      </div>
    </main>
  );
}
