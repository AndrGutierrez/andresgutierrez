"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion";
export default function Home() {
  const ref = useRef(null);
    const isInView = useInView(ref);
  return (

    <main className="flex min-h-screen justify-center flex-col items-center p-24 bg-background" ref={ref}>
        <motion.div className="w-100 justify-center" variants={{
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
        <h1 className="text-5xl text-center font-bold mb-24">
          Thank you for visiting my website. I am currently working on it. 
          <br />
          Please come back later!.
        </h1>
      </motion.div>
    </main>
  );
}
