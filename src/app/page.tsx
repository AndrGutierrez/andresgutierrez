"use client"
import { useEffect, useRef, useState, lazy } from "react"
import { motion, useAnimation, useInView } from "framer-motion";
import Electron from "../components/animated/Electron";
import { Canvas } from "@react-three/fiber";
import { Euler, Vector3 } from "three";
import Orbit from "@/components/animated/Orbit";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
const AtomCore = lazy(()=> import("@/components/animated/AtomCore"));

const orbitRadius = 2.5;
const electronOrbit = 2.5
export default function Home() {
    const [title, setTitle] = useState(<>Hi, I'm Andres</>);  
  const [display, setDisplay]= useState(false);
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
        <div className="h-[400px] md:h-[500px] lg:h-auto lg:w-2/3 ">

          {
            display && (
              <Canvas style={{
                // height: "400px"
              }} >
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                      <mesh rotation={[0,-0.15,0]}>

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
                      <Orbit radius={orbitRadius} rotation={[Math.PI/2, Math.PI/4, 0]}></Orbit>
                      <Orbit radius={orbitRadius} rotation={[-Math.PI/2, Math.PI/4, 0]}></Orbit>
                      {/* <Orbit radius={orbitRadius} rotation={[1.374, 0.758, 0]}></Orbit>*/}
                      </mesh>
              </Canvas>

            )
          }
        </div>
      </div>
    </main>
  );
}
