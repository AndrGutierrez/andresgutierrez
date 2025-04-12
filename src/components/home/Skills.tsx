import { motion } from 'framer-motion'


export default function Skills() {
  const skills = [
    { image: "react.webp", title: "React", color: "from-cyan-500 to-blue-600" },
    { image: "django.webp", title: "Django", color: "from-emerald-500 to-green-600" },
    { image: "aws.webp", title: "AWS", color: "from-amber-500 to-orange-600" },
    { image: "nextjs.webp", title: "Next.js", color: "from-gray-100 to-gray-400" },
    { image: "docker.webp", title: "Docker", color: "from-sky-500 to-blue-600" },
  ];

  return (
    <section className="w-full py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
            <div className={`absolute -inset-1 rounded-2xl bg-linear-to-br ${skill.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={`images/skills/${skill.image}`}
                alt={skill.title}
                className="h-12 mb-4 object-contain transition-transform group-hover:scale-110 duration-300"
                width={50}
                height={50}
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
