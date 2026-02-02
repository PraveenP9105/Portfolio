export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Praveen P
        </h1>
        <h2 className="text-xl text-blue-600 mt-4">
          Software Developer | Java & Web Technologies | Data & AI Enthusiast
        </h2>
        <p className="mt-6 max-w-3xl text-gray-700 leading-relaxed">
          Computer Science and Engineering undergraduate at Knowledge Institute
          of Technology, Salem, with a strong academic foundation and practical
          exposure in backend development, data science, and real-world
          projects. Passionate about scalable software development, analytics,
          and AI-driven solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            View Projects
          </a>
          <a
            href="/Praveen_Resume.pdf"
            className="border px-6 py-3 rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
