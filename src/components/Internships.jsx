import SectionTitle from "./ui/SectionTitle";
import EpisodeCard from "./ui/EpisodeCard";

/* Ordered newest → oldest (most recent first).
   Reverse-numbered: 03 → 02 → 01  so the latest is the highest number. */
const internships = [
  {
    episode: "03",
    title: "Backend Developer",
    company: "JSW OHC Consultancy Project",
    duration: "28 Aug 2024 – 07 Dec 2025",
    description:
      "Worked as a backend developer on the JSW OHC web application, specifically handling the Pharmacy module. Responsible for implementing backend logic, managing database operations, and ensuring smooth integration between frontend and backend components. The project provided real-world exposure to enterprise-level development practices and teamwork.",
    tech: "Django, React.js, SQL, VS Code",
    accentColor: "#38BDF8",
  },
  {
    episode: "02",
    title: "Data Science Intern",
    company: "Prodigy InfoTech",
    duration: "15 Feb 2024 – 15 Mar 2024",
    description:
      "Completed a one-month internship focused on Data Science. Worked with Python to analyze data, understand datasets, and perform exploratory data analysis. Gained hands-on experience with real-world data and improved analytical thinking skills.",
    tech: "Python, Jupyter Notebook",
    accentColor: "#F59E0B",
  },
  {
    episode: "01",
    title: "Content Writing Intern",
    company: "Earth 5R",
    duration: "24 May 2023 – 24 Jun 2023",
    description:
      "Worked as a content writing intern contributing to sustainability and environmental awareness initiatives. Created and edited content using digital tools while ensuring clarity, accuracy, and originality.",
    tech: "Earth 5R Application, Grammarly, QuillBot",
    accentColor: "#34D399",
  },
];

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          category="▷ EXPERIENCE"
          title="Internships"
          gradient="amber"
          subtitle="Industry exposure and hands-on roles across three organisations"
        />

        <div>
          {internships.map((item, i) => (
            <EpisodeCard key={item.episode} {...item} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
