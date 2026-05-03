import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

export default function Awards() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Awards
        </motion.h2>

        <div className="space-y-6">

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-gray-900">
            <FaTrophy className="text-orange-500 mb-2" />
            <p className="text-gray-800 dark:text-gray-200">
              <strong className="text-gray-900 dark:text-white">ISTE Best Student Award</strong>
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-gray-900">
            <FaTrophy className="text-orange-500 mb-2" />
            <p className="text-gray-800 dark:text-gray-200">
              <strong className="text-gray-900 dark:text-white">Achiever Award</strong> – Received on Achievers Day
              in 2024 and 2026.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-gray-900">
            <FaTrophy className="text-orange-500 mb-2" />
            <p className="text-gray-800 dark:text-gray-200">
              <strong className="text-gray-900 dark:text-white">First Prize – QueryWhizz Event</strong><br />
              Symposium conducted by the Government College of Engineering,
              Salem
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
