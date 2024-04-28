"use client"
import { useEffect, useRef, useState, lazy, Suspense, Dispatch, SetStateAction, ReactNode } from "react"
import { motion, useAnimation, useInView } from "framer-motion";
import { useGLTF } from "@react-three/drei";
import { Canvas, Props } from "@react-three/fiber";
import Skill from "@/components/Skill";
import Link from "next/link";
const Atom = lazy(() => import("@/components/Atom"));



function FadeIn({ children, setFinished = () => { }, show = true }: { children: ReactNode, setFinished?: Dispatch<SetStateAction<boolean>>, show?: boolean }) {
  const ref = useRef(null)
  const mainControls = useAnimation();
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView && show) mainControls.start("visible")
  }, [isInView, show])

  const animationConfig = {
    hidden: {
      opacity: 0, y: 75
    },
    visible: {
      opacity: 1, y: 0
    }
  }

  return (
    <motion.div
      className="w-100"
      ref={ref}
      variants={animationConfig}
      transition={{ duration: .6, delay: 0.3 }}
      initial="hidden"
      animate={mainControls}
      onAnimationComplete={() => {
        setFinished(true)
      }}>
      {children}
    </motion.div>)
}

function Clients() {
  return (
    <section className="w-full">
      <h2 className="text-4xl mb-8">My Clients</h2>
      <div className="flex flex-col md:flex-row justify-evenly align-center">
        <div className="h-[50px] flex justify-center mb-5 md:mb-0">
          <img src="images/clients/gobuyside.png" alt="goBuySide " className="h-full opacity-25 hover:opacity-100 transition-opacity" height={50} />
        </div>
        <img src="images/clients/zeitfur.svg" alt="Zeit Fui Die Schule" className=" h-[50px] opacity-25 hover:opacity-100 transition-opacity" height={50} />
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    {
      "image": "images/skills/react.png",
      "title": "React"
    },
    {
      "image": "images/skills/django.png",
      "title": "Django"
    },
    {
      "image": "images/skills/aws.png",
      "title": "AWS",
    },
    {
      "image": "images/skills/nextjs.png",
      "title": "Nextjs"
    },
    {
      "image": "images/skills/docker.png",
      "title": "Docker"
    }

  ]

  return (
    <div className="w-full">

      <h2 className="text-4xl mb-8 ">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 lg:grid-rows-1  gap-4 mt-36 gap-y-24">
        {
          skills.map((skill, i) => (
            <Skill {...skill} key={i}></Skill>
          ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [title, setTitle] = useState(<>Hi, I&apos;m Andres</>);
  const [displayAtom, setDisplayAtom] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const [showSkills, setShowSkills] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showClients, setShowClients] = useState(false)

  const timerid = useRef(null)
  useEffect(() => {
    if (isInView) mainControls.start("visible")
  }, [isInView])

  useEffect(() => {
    console.log(showSkills)
  }, [showSkills])

  useEffect(() => {
    if (displayAtom) setTimeout(() => setShowClients(true), 500)
    // return ()=> clearTimeout(timerid.current)
  }, [displayAtom])
  return (

    <main className="bg-gradient-to-b from-background to-black from-15% ">
      <div className="lg:flex min-h-screen justify-between py-10 lg:pl-12 xl:pl-24 h-100 " ref={ref}>
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
            initial="hidden"
            animate={mainControls}
            onAnimationComplete={() => { setDisplayAtom(true) }}
          >
            <div className="mb-24 flex flex-col items-center lg:items-start">
              <h1 className="text-center lg:text-left text-5xl xl:text-7xl font-bold mb-2 sm:truncate">
                {title}
              </h1>
              <p>Software Engineer and tech enthusiast</p>
            </div>
          </motion.div>
        </div>
        <div className="h-100 w-100 lg:w-2/3 lg:flex items-center justify-center">

          <div className="h-[400px] md:h-[550px] w-full xl:h-full xl:w-[80%]  ">
            {
              displayAtom && (
                <Canvas>
                  <Atom />
                </Canvas>
              )
            }
          </div>
        </div>
      </div>
      <article className="flex justify-center">
        <div className="px-10 grid grid-cols-1 gap-y-12 max-w-screen-lg ">
          <FadeIn setFinished={setShowSkills} show={showClients}>
            <Clients ></Clients>
          </FadeIn>
          <FadeIn show={showSkills} setFinished={setShowAbout}>
            <Skills></Skills>
          </FadeIn>
          <FadeIn show={showAbout}>
            <h2 className="text-4xl mb-8 ">About Me</h2>
            {/* <div className="justify-center flex w-full"> */}
            <div className="flex align-center">
              <div className="text-lg w-11/12">
                <p >
                  &emsp; I am a Computer Science Engineer working from Venezuela. I have 4+ years of experience working on IT as a Full Stack developer and AWS Solutions architect, designing cloud infraestructure for high quality, fast, and scalable software.
                </p>
                <br />
                <p>
                  {/* <i> */}
                  &emsp; I love tech in general, PC building, dogs, and many other things, if you are interested on anything of that, take a look to <Link href="/blog" className="text-blue-600 dark:text-blue-500 hover:underline" > my blog</Link>.
                  {/* </i> */}
                </p>
              </div>
            </div>
            {/* </div> */}
          </FadeIn>
        </div>
      </article>
      {/* {(!showSkills && displayAtom) && <div className="h-[100vh]"></div>} */}
      {/* <div className="h-10"></div> */}

    </main>
  );
}
useGLTF.preload("crystal_heart_compressed.glb");
