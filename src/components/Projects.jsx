import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects & Internships
        </motion.h2>

        <div className="space-y-10">

          {/* JSW OHC Consultancy Project */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">
              JSW OHC Consultancy Project
            </h3>

            <p className="text-gray-800 font-medium mb-2">
              Role: Backend Developer
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Worked as a backend developer on the JSW OHC web application,
              specifically handling the Pharmacy module. Responsible for
              implementing backend logic, managing database operations, and
              ensuring smooth integration between frontend and backend
              components. The project provided real-world exposure to
              enterprise-level development practices and teamwork.
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Technologies Used:</span> Django,
              React.js, SQL, VS Code
            </p>
          </motion.div>

          {/* Prodigy InfoTech Internship */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Prodigy InfoTech – Data Science Internship
            </h3>

            <p className="text-gray-800 font-medium mb-2">
              Duration: 15 February 2024 – 15 March 2024
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Completed a one-month internship focused on Data Science. Worked
              with Python to analyze data, understand datasets, and perform
              exploratory data analysis. Gained hands-on experience with
              real-world data and improved analytical thinking skills.
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Tools & Technologies:</span> Python,
              Jupyter Notebook
            </p>
          </motion.div>

          {/* Earth 5R Internship */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Earth 5R – Content Writing Internship
            </h3>

            <p className="text-gray-800 font-medium mb-2">
              Duration: 24 May 2023 – 24 June 2023
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Worked as a content writing intern contributing to sustainability
              and environmental awareness initiatives. Created and edited
              content using digital tools while ensuring clarity, accuracy, and
              originality.
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Tools Used:</span> Earth 5R
              Application, Grammarly, QuillBot
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
