import { motion } from 'framer-motion'
import Link from "next/link";
export default function About() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6 text-lg leading-relaxed text-gray-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-6">
            <p className="flex items-start gap-4">
              <span className="text-blue-400 text-xl">▹</span>
              Software Engineer with 5 years experience in full-stack development and AWS cloud architecture
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
            className="inline-flex items-center mt-8 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:scale-[1.02] transition-transform group"
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

