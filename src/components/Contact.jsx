import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <div className="space-y-4 text-gray-800">

          <p className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-blue-600" />
            4-57, Seeranganoor, Periyasoragai (Post), Mettur (Taluk),
            Salem – 636502
          </p>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            palanisamypspa@gmail.com
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-blue-600" />
            +91 6381982535
          </p>

          <div className="flex gap-6 pt-4">
            <a
              href="https://linkedin.com/in/praveen-p-913681218"
              target="_blank"
              className="flex items-center gap-2 text-blue-600"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/PraveenP9105"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://leetcode.com/u/PraveenP9105/"
              target="_blank"
              className="flex items-center gap-2 text-orange-600"
            >
              💻 LeetCode
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
