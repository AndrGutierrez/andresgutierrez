"use client"
import { useEffect, useRef, useState, lazy, Suspense } from "react"
import { motion, useAnimation, useInView } from "framer-motion";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
const Atom = lazy(()=> import("@/components/Atom"));


function Clients(){
  const ref=useRef(null)
  const mainControls= useAnimation();
  const isInView = useInView(ref);
  useEffect(()=>{
    if (isInView) mainControls.start("visible")
  }, [isInView])
  return (
    <section ref={ref} className="px-10 lg:px-20">
        <motion.div className="w-100 " variants={{
              hidden: {
                opacity: 0, y: 75
              },
              visible: {
                opacity: 1, y: 0
              }
            }} 
            transition={{ duration: .7, delay: 0.3 }}
            initial= "hidden"
            animate={mainControls}
            >

          <h2 className="text-4xl mb-8">My Clients</h2>
          <div className="flex flex-col md:flex-row justify-evenly align-center">
            <div className="h-[50px] flex justify-center">
              <img src="images/clients/gobuyside.png" alt="goBuySide " className="h-full opacity-25 hover:opacity-100 transition-opacity" height={50}/>
            </div>
            <img src="images/clients/zeitfur.svg" alt="Zeit Fui Die Schule" className=" h-[50px] opacity-25 hover:opacity-100 transition-opacity" height={50}/>
          </div>
        </motion.div>
    </section>)
}

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


  return (

    <main>
      <div className="lg:flex min-h-screen justify-between py-10 xl:pl-24 bg-background h-100 " ref={ref}>
        <div className="h-100 flex items-center justify-center px-10 sm:px-0">
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
            animate={mainControls}
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
                <Canvas>

                <Atom />
                </Canvas>
              )
            }
            </div>
        </div>
      </div>
      <Clients></Clients>
    </main>
  );
}
useGLTF.preload("crystal_heart.glb");
