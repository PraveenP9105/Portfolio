import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          I am currently pursuing my Bachelor of Engineering in Computer Science
          and Engineering at Knowledge Institute of Technology, Salem. Throughout
          my academic journey, I have consistently demonstrated strong analytical
          and logical thinking abilities, reflected in my academic performance
          and technical achievements.
        </motion.p>

        <motion.p
          className="text-gray-700 leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          I have gained practical exposure through internships and consultancy
          projects across multiple domains including backend development, data
          science, and digital content creation. My technical interests span Java
          development, web technologies, data analytics, and AI-based solutions.
          I am also skilled in design tools such as Figma and Canva, enabling me
          to bridge the gap between development and user experience.
        </motion.p>

        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          I am a disciplined learner and have completed extensive online
          certifications through NPTEL, earning the prestigious NPTEL Discipline
          Star for completing more than 50 weeks of learning. I am highly
          motivated to contribute to impactful projects and continuously upgrade
          my technical and professional skill set.
        </motion.p>

      </div>
    </section>
  );
}
