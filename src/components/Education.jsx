import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {/* BE – CSE */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm dark:shadow-gray-900 border-l-4 border-blue-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2">
              Bachelor of Engineering – Computer Science and Engineering
            </h3>
            <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
              Knowledge Institute of Technology, Salem
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-3">
              Duration: November 2022 – March 2026
            </p>
            <p className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold px-3 py-1 rounded-md text-sm border border-blue-100 dark:border-blue-800">
              CGPA: 8.29
            </p>
          </motion.div>

          {/* HSC */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm dark:shadow-gray-900 border-l-4 border-emerald-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
              Sengunthar Matric Higher Secondary School, Tharamangalam
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-3">
              Year: 2022
            </p>
            <p className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-semibold px-3 py-1 rounded-md text-sm border border-emerald-100 dark:border-emerald-800">
              Percentage: 87%
            </p>
          </motion.div>

          {/* SSLC */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm dark:shadow-gray-900 border-l-4 border-amber-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">
              Secondary School Leaving Certificate (SSLC)
            </h3>
            <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
              Sengunthar Matric Higher Secondary School, Tharamangalam
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-3">
              Year: 2020
            </p>
            <p className="inline-block bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 font-semibold px-3 py-1 rounded-md text-sm border border-amber-100 dark:border-amber-800">
              Percentage: 95%
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
