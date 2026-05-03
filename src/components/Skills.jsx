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
          <h3 className="text-lg font-semibold mb-4 text-blue-700 dark:text-blue-400">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg shadow-sm font-medium border border-blue-100 dark:border-blue-800">Java</span>
            <span className="px-4 py-2 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-lg shadow-sm font-medium border border-yellow-100 dark:border-yellow-800">Python</span>
            <span className="px-4 py-2 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-lg shadow-sm font-medium border border-indigo-100 dark:border-indigo-800">C</span>
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
          <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
            Web & Backend Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-lg shadow-sm font-medium border border-green-100 dark:border-green-800">Django</span>
            <span className="px-4 py-2 bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 rounded-lg shadow-sm font-medium border border-cyan-100 dark:border-cyan-800">React.js</span>
            <span className="px-4 py-2 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-lg shadow-sm font-medium border border-green-100 dark:border-green-800">Springboot</span>
            <span className="px-4 py-2 bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 rounded-lg shadow-sm font-medium border border-teal-100 dark:border-teal-800">SQL</span>
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
          <h3 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-400">
            Data & Analytics Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-lg shadow-sm font-medium border border-purple-100 dark:border-purple-800">Power BI</span>
            <span className="px-4 py-2 bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 rounded-lg shadow-sm font-medium border border-orange-100 dark:border-orange-800">
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
          <h3 className="text-lg font-semibold mb-4 text-pink-700 dark:text-pink-400">
            Design & Productivity Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 rounded-lg shadow-sm font-medium border border-pink-100 dark:border-pink-800">Figma</span>
            <span className="px-4 py-2 bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 rounded-lg shadow-sm font-medium border border-rose-100 dark:border-rose-800">Canva</span>
            <span className="px-4 py-2 bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-lg shadow-sm font-medium border border-sky-100 dark:border-sky-800">VS Code</span>
            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-lg shadow-sm font-medium border border-emerald-100 dark:border-emerald-800">Grammarly</span>
            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-lg shadow-sm font-medium border border-emerald-100 dark:border-emerald-800">QuillBot</span>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-violet-700 dark:text-violet-400">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 rounded-lg shadow-sm font-medium border border-violet-100 dark:border-violet-800">
              Logical Thinking
            </span>
            <span className="px-4 py-2 bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 rounded-lg shadow-sm font-medium border border-violet-100 dark:border-violet-800">
              Problem Solving
            </span>
            <span className="px-4 py-2 bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 rounded-lg shadow-sm font-medium border border-violet-100 dark:border-violet-800">
              Backend Development
            </span>
            <span className="px-4 py-2 bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 rounded-lg shadow-sm font-medium border border-violet-100 dark:border-violet-800">
              Data Analysis
            </span>
            <span className="px-4 py-2 bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 rounded-lg shadow-sm font-medium border border-violet-100 dark:border-violet-800">
              UI/UX Designing
            </span>
            <span className="px-4 py-2 bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 rounded-lg shadow-sm font-medium border border-violet-100 dark:border-violet-800">
              Content Creation
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
