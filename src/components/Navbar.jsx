import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm dark:shadow-gray-900 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-blue-600 dark:text-blue-500 tracking-tight">Praveen P</h1>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#internships" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Internships</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
