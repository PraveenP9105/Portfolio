import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
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
          <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500">Java</span>
            <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500">Python</span>
            <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500">C</span>
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
          <h3 className="text-lg font-semibold mb-4 text-emerald-600 dark:text-emerald-400">
            Web & Backend Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-500">Django</span>
            <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-500">React.js</span>
            <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-500">Springboot</span>
            <span className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-500">SQL</span>
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
          <h3 className="text-lg font-semibold mb-4 text-amber-600 dark:text-amber-400">
            Data & Analytics Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-amber-400 dark:hover:border-amber-500">Power BI</span>
            <span className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-amber-400 dark:hover:border-amber-500">
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
          <h3 className="text-lg font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
            Design & Productivity Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-500">Figma</span>
            <span className="px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-500">Canva</span>
            <span className="px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-500">VS Code</span>
            <span className="px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-500">Grammarly</span>
            <span className="px-4 py-2 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-500">QuillBot</span>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-teal-600 dark:text-teal-400">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500">
              Logical Thinking
            </span>
            <span className="px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500">
              Problem Solving
            </span>
            <span className="px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500">
              Backend Development
            </span>
            <span className="px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500">
              Data Analysis
            </span>
            <span className="px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500">
              UI/UX Designing
            </span>
            <span className="px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 shadow-sm font-medium rounded-lg transition-all hover:-translate-y-1 hover:shadow-md hover:border-teal-400 dark:hover:border-teal-500">
              Content Creation
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
