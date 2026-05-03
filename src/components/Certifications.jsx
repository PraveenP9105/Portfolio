import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
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
          Certifications
        </motion.h2>

        <motion.div
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
            <FaCertificate className="text-blue-600 dark:text-blue-400" />
            NPTEL Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <span>Python</span>
            <span>C Programming</span>
            <span>Internet of Things (IoT)</span>
            <span>Industry 4.0</span>
            <span>Ethical Hacking</span>
            <span>Privacy and Security in Online Social Media</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
