"use client"
import { useEffect, useRef, useState, lazy, Suspense } from "react"
import { motion, useAnimation, useInView } from "framer-motion";
import { useGLTF, useAnimations } from "@react-three/drei";

const Atom = lazy(()=> import("@/components/Atom"));



export default function Home() {
  const [title, setTitle] = useState(<>Hi, I&apos;m Andres</>);  
  const [display, setDisplay]= useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls= useAnimation();
  useEffect(()=>{
    if (isInView) mainControls.start("visible")
  }, [isInView])

  useEffect(()=>{
    console.log(display)
  }, [display])

  const gltf = useGLTF("crystal_heart.glb");

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
                <Atom gltf={gltf}/>
              )
            }
            </div>
        </div>
      </div>
    </main>
  );
}
// useGLTF.preload("crystal_heart.glb");
