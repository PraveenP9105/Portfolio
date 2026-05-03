export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-gray-900 pt-20 transition-colors">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Praveen P
                </h1>
                <h2 className="text-xl text-blue-600 dark:text-blue-400 mt-4 font-medium">
                    Software Developer | Java & Web Technologies | Data & AI Enthusiast
                </h2>
                <p className="mt-6 max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Computer Science and Engineering undergraduate at Knowledge Institute
                    of Technology, Salem, with a strong academic foundation and practical
                    exposure in backend development, data science, and real-world
                    projects. Passionate about scalable software development, analytics,
                    and AI-driven solutions.
                </p>

                <div className="mt-8 flex gap-4">
                    <a
                        href="#projects"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all hover:-translate-y-1"
                    >
                        View Projects
                    </a>
                    <a
                        href="/Praveen_P_Resume.pdf"
                        download="Praveen_P_Resume.pdf"
                        className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-lg transition-all hover:-translate-y-1"
                    >
                        Download Resume
                    </a>

                </div>
            </div>
        </section>
    );
}
