"use client";
import { useEffect, useRef, useState, Dispatch, SetStateAction, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Clients, Skills, About } from '@/components/home'
import { LoadingWheel } from '@/components/app'

import dynamic from "next/dynamic";
import { useRenderStore } from "@/store";

const ModelRenderer = dynamic(() => import("@/components/model-renderer"), {
  ssr: false,
});

function FadeIn({ children, setFinished = () => { }, show = true, className, translate = true }: { children: ReactNode; setFinished?: Dispatch<SetStateAction<boolean>>; show?: boolean, className?: string, translate?: boolean }) {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView && show) mainControls.start("visible");
  }, [isInView, show, mainControls]);

  const animationConfig = {
    hidden: { opacity: 0, y: translate ? 75 : 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={className ? className : "w-full h-full"}
      ref={ref}
      variants={animationConfig}
      transition={{ duration: 0.6, delay: 0.3 }}
      initial="hidden"
      animate={mainControls}
      onAnimationComplete={() => setFinished(true)}
    >
      {children}
    </motion.div>
  );
}


export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const [title] = useState(<>Hi, I&apos;m Andres</>);
  const [displayAtom, setDisplayAtom] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showClients, setShowClients] = useState(false);

  const { rendered } = useRenderStore()

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  useEffect(() => {
    if (displayAtom) setTimeout(() => setShowClients(true), 500);
  }, [displayAtom]);

  return (
    <main className="from-gray-900 via-gray-900 to-black ">
      <div className="lg:flex min-h-screen justify-between py-10  lg:pl-12 xl:pl-24 h-full" ref={ref}>
        {/* Left Side: Text Content */}
        <div className="flex items-center justify-center px-10 sm:px-0">
          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, },
              visible: { opacity: 1, },
            }}
            transition={{ duration: 0.7, delay: 0 }}
            initial="hidden"
            animate={mainControls}
            onAnimationComplete={() => setDisplayAtom(true)}
          >
            <div className="mb-24 flex flex-col items-center lg:items-start">
              <h1 className="text-center lg:text-left text-7xl xl:text-8xl font-bold mb-2 sm:truncate bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-lg text-gray-400">Software Engineer and tech enthusiast</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Atom Component */}
        <div className="w-full lg:w-2/3 lg:flex items-center justify-center relative">
          {
            displayAtom && (

              <>
                <FadeIn className="h-[400px] md:h-[550px] w-full xl:h-full xl:w-[80%]" translate={false} show={displayAtom}>
                  <ModelRenderer></ModelRenderer>

                </FadeIn>

                {!rendered && (
                  <LoadingWheel>
                  </LoadingWheel>
                )}
              </>
            )
          }
        </div>
      </div>

      {/* Content Sections */}
      <article className="relative z-10">
        <div className="w-full">
          <FadeIn setFinished={setShowSkills} show={showClients}>
            <Clients />
          </FadeIn>
          <FadeIn show={showSkills} setFinished={setShowAbout}>
            <Skills />
          </FadeIn>
          <FadeIn show={showAbout}>
            <About />
          </FadeIn>
        </div>
      </article>
    </main>
  );
}

