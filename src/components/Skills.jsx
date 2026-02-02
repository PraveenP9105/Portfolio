import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Programming Languages */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-lg">Java</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">Python</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">C</span>
          </div>
        </motion.div>

        {/* Web & Backend Technologies */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Web & Backend Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-lg">Django</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">React.js</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">SQL</span>
          </div>
        </motion.div>

        {/* Data & Analytics Tools */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Data & Analytics Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-lg">Power BI</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              Jupyter Notebook
            </span>
          </div>
        </motion.div>

        {/* Design & Productivity Tools */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Design & Productivity Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-lg">Figma</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">Canva</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">VS Code</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">Grammarly</span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">QuillBot</span>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              Logical Thinking
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              Problem Solving
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              Backend Development
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              Data Analysis
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              UI/UX Designing
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              Content Creation
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
