import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.div
          className="bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <FaCertificate className="text-blue-600" />
            NPTEL Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
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
