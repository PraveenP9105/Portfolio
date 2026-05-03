import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, interactive portfolio website built with React and Tailwind CSS featuring dark mode and infinite scrolling.",
    github: "https://github.com/PraveenP9105/Portfolio",
    demo: "#",
    demoText: "You're viewing it!",
  },
  {
    title: "Jira Clone",
    description: "A full-stack project management tool mirroring Jira's core functionalities. Built with React and Springboot.",
    github: "https://github.com/PraveenP9105/Jira-Clone",
    demo: "https://jira-clone-xi-green.vercel.app/",
  },
  {
    title: "Jumping Game",
    description: "An interactive and engaging web-based jumping game developed using React.",
    github: "https://github.com/PraveenP9105/Reacct-Game",
    demo: "https://reacct-game.vercel.app/",
  },
  {
    title: "Logistics Tracking System",
    description: "A comprehensive system to manage and track logistics operations seamlessly.",
    github: "https://github.com/PraveenP9105/Logistics-Frontend",
    demo: "",
  },
  {
    title: "Invoice Generator",
    description: "A robust application for generating, managing, and downloading invoices efficiently.",
    github: "https://github.com/PraveenP9105/Invoice-Generator",
    demo: "",
  },
  {
    title: "Attendance Tracker System",
    description: "A smart tracking system for monitoring attendance records with advanced analytics.",
    github: "https://github.com/mtanushkkumar-debug/attendancetracker",
    demo: "",
  },
  {
    title: "Ecommerce Site",
    description: "A fully functional e-commerce platform with a modern UI and secure backend.",
    github: "https://github.com/DeekshaMuralikumar/New_ECOMMERSE_WEBSITES-",
    demo: "",
  },
  {
    title: "Course Enrolment System",
    description: "An educational platform designed to streamline the student course enrolment process.",
    github: "https://github.com/KavyaSakthivel18/CES_System",
    demo: "",
  },
  {
    title: "Online Auction System",
    description: "A competitive bidding platform built with real-time updates and secure transactions.",
    github: "https://github.com/PraveenP9105/Online-Auction-System",
    demo: "",
  },
  {
    title: "Retail Ordering System",
    description: "An efficient ordering system for retail businesses to manage inventory and sales.",
    github: "https://github.com/HariPrasath-369/HCL_Hackathon_METHAMPHETAFIVE",
    demo: "",
  },
  {
    title: "Hospital Management System",
    description: "A centralized management system for handling hospital administration and patient records.",
    github: "",
    demo: "",
  },
];

export default function Projects() {
  // Duplicate array to create a seamless infinite loop
  const infiniteProjects = [...projects, ...projects];

  return (
    <section id="projects" className="py-20 overflow-hidden bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Full-Stack Projects
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A collection of my recent React and Springboot applications.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col group py-4">
        {/* Carousel Container */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {infiniteProjects.map((project, index) => (
            <div
              key={index}
              className="w-80 md:w-96 flex-shrink-0 mx-4 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md dark:shadow-gray-900 border-t-4 border-t-blue-500 dark:border-gray-800 dark:border-t-blue-500 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 min-h-[80px]">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900"
                  >
                    <FaGithub size={18} /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target={project.demo === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    <FaExternalLinkAlt size={14} /> {project.demoText || "Live Demo"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
