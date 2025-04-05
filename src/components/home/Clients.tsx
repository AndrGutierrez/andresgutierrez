import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";

export default function Clients() {
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
        {["gobuyside.webp", "zeitfur.svg", "uprospect.svg"].map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-blue-400"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <ExportedImage
              src={`images/clients/${logo}`}
              alt="Client"
              className="h-16 mx-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              width={500}
              height={100}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

