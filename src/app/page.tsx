"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion";
export default function Home() {
  const ref = useRef(null);
    const isInView = useInView(ref);
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background" ref={ref}>
        {/* <motion.div className="h-[500px] bg-white w-[500px] mb-[10px]" variants={{
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
        ></motion.div>
     */}
    </main>
  );
}
