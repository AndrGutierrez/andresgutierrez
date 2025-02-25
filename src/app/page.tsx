"use client";
import { useEffect, useRef, useState, lazy, Suspense, Dispatch, SetStateAction, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useGLTF } from "@react-three/drei";
import { Canvas, Props } from "@react-three/fiber";
import Skill from "@/components/Skill";
import Link from "next/link";
const Atom = lazy(() => import("@/components/Atom"));

function FadeIn({ children, setFinished = () => { }, show = true, className }: { children: ReactNode; setFinished?: Dispatch<SetStateAction<boolean>>; show?: boolean, className?: string }) {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView && show) mainControls.start("visible");
  }, [isInView, show]);

  const animationConfig = {
    hidden: { opacity: 0, y: 75 },
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

function Clients() {
  return (
    <section className="w-full text-center py-16 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Trusted By
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {["gobuyside.png", "zeitfur.svg", "uprospect.svg"].map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-blue-400"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={`images/clients/${logo}`}
              alt="Client"
              className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { image: "react.png", title: "React", color: "from-cyan-500 to-blue-600" },
    { image: "django.png", title: "Django", color: "from-emerald-500 to-green-600" },
    { image: "aws.png", title: "AWS", color: "from-amber-500 to-orange-600" },
    { image: "nextjs.png", title: "Next.js", color: "from-gray-100 to-gray-400" },
    { image: "docker.png", title: "Docker", color: "from-sky-500 to-blue-600" },
  ];

  return (
    <section className="w-full py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Technical Arsenal
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="group relative aspect-square bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-blue-400"
          >
            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${skill.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={`images/skills/${skill.image}`}
                alt={skill.title}
                className="h-12 mb-4 object-contain transition-transform group-hover:scale-110 duration-300"
              />
              <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                {skill.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6 text-lg leading-relaxed text-gray-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-6">
            <p className="flex items-start gap-4">
              <span className="text-blue-400 text-xl">▹</span>
              Computer Science Engineer with 4+ years experience in full-stack development and AWS cloud architecture
            </p>
            <p className="flex items-start gap-4">
              <span className="text-purple-400 text-xl">▹</span>
              Passionate about building high-quality, scalable solutions with modern technologies
            </p>
            <p className="flex items-start gap-4">
              <span className="text-cyan-400 text-xl">▹</span>
              Tech enthusiast with interests in hardware, cloud infrastructure, and open-source projects
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:scale-[1.02] transition-transform group"
          >
            <span>Explore My Blog</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const [title, setTitle] = useState(<>Hi, I&apos;m Andres</>);
  const [displayAtom, setDisplayAtom] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const [showSkills, setShowSkills] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showClients, setShowClients] = useState(false);

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  useEffect(() => {
    if (displayAtom) setTimeout(() => setShowClients(true), 500);
  }, [displayAtom]);

  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="lg:flex min-h-screen justify-between py-10 lg:pl-12 xl:pl-24 h-full" ref={ref}>
        {/* Left Side: Text Content */}
        <div className="flex items-center justify-center px-10 sm:px-0">
          <motion.div
            className="w-full"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.3 }}
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
        <div className="w-full lg:w-2/3 lg:flex items-center justify-center">
          <FadeIn className="h-[400px] md:h-[550px] w-full xl:h-full xl:w-[80%]" show={displayAtom}>
            <Canvas>
              <Atom />
            </Canvas>
          </FadeIn>
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

useGLTF.preload("crystal_heart_compressed.glb");
