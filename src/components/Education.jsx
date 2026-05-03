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

        {/* BE – CSE */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bachelor of Engineering – Computer Science and Engineering
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Knowledge Institute of Technology, Salem
          </p>
          <p className="text-gray-700 dark:text-gray-400 text-sm mt-1">
            Duration: November 2022 – March 2026
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
            CGPA: 8.29
          </p>
        </motion.div>

        {/* HSC */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Higher Secondary Certificate (HSC)
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Sengunthar Matric Higher Secondary School, Tharamangalam
          </p>
          <p className="text-gray-700 dark:text-gray-400 text-sm mt-1">
            Year: 2022
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
            Percentage: 87%
          </p>
        </motion.div>

        {/* SSLC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Secondary School Leaving Certificate (SSLC)
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Sengunthar Matric Higher Secondary School, Tharamangalam
          </p>
          <p className="text-gray-700 dark:text-gray-400 text-sm mt-1">
            Year: 2020
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
            Percentage: 95%
          </p>
        </motion.div>

      </div>
    </section>
  );
}
