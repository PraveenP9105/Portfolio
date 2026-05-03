import { motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";

export default function Languages() {
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
          Languages
        </motion.h2>

        <div className="flex gap-6 text-lg text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <FaLanguage className="text-blue-600 dark:text-blue-400" /> English
          </div>
          <div className="flex items-center gap-2">
            <FaLanguage className="text-blue-600 dark:text-blue-400" /> Tamil
          </div>
        </div>

      </div>
    </section>
  );
}
