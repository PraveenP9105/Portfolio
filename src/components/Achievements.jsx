import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="space-y-6">

          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm dark:shadow-gray-900">
            <FaStar className="text-yellow-500 mb-2" />
            <p className="text-gray-800 dark:text-gray-200">
              <strong className="text-gray-900 dark:text-white">NPTEL Discipline Star</strong> – Awarded for completing
              more than 50 weeks of learning
            </p>
          </motion.div>

          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm dark:shadow-gray-900">
            <FaStar className="text-yellow-500 mb-2" />
            <p className="text-gray-800 dark:text-gray-200">
              <strong className="text-gray-900 dark:text-white">HackerRank Java (Basic) Certification</strong>
            </p>
          </motion.div>

          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm dark:shadow-gray-900">
            <FaStar className="text-yellow-500 mb-2" />
            <p className="text-gray-800 dark:text-gray-200">
              <strong className="text-gray-900 dark:text-white">LC 200 Days Badge 2025</strong><br />
              Gained LeetCode’s 200 Days Badge with 500+ problems solved
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
