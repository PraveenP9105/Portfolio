import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="space-y-6">

          <motion.div className="bg-white p-6 rounded-xl shadow-sm">
            <FaStar className="text-yellow-500 mb-2" />
            <p>
              <strong>NPTEL Discipline Star</strong> – Awarded for completing
              more than 50 weeks of learning
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-xl shadow-sm">
            <FaStar className="text-yellow-500 mb-2" />
            <p>
              <strong>HackerRank Java (Basic) Certification</strong>
            </p>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-xl shadow-sm">
            <FaStar className="text-yellow-500 mb-2" />
            <p>
              <strong>LeetCode 100 Days Badge – 2025</strong><br />
              Solved 400+ problems demonstrating strong problem-solving and
              consistency
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
