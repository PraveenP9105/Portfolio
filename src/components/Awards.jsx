import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

export default function Awards() {
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
          Awards
        </motion.h2>

        <div className="space-y-6">

          <div className="bg-gray-50 p-6 rounded-xl">
            <FaTrophy className="text-orange-500 mb-2" />
            <p>
              <strong>Achiever Award (2024)</strong> – Received on Achievers Day
              for completing NPTEL certifications
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <FaTrophy className="text-orange-500 mb-2" />
            <p>
              <strong>First Prize – QueryWhizz Event</strong><br />
              Symposium conducted by the Government College of Engineering,
              Salem
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
