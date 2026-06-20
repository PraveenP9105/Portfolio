import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const stats = [
  { value: "11+", label: "Projects Built", icon: "▣", color: "#38BDF8" },
  { value: "3", label: "Internships", icon: "▷", color: "#818CF8" },
  { value: "6", label: "NPTEL Certs", icon: "◈", color: "#34D399" },
  { value: "500+", label: "LeetCode", icon: "⌁", color: "#F59E0B" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle category="◉ PROFILE" title="About Me" gradient="violet" />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-1 content-start">
            {stats.map((stat, i) => (
              <GlassCard key={stat.label} glow="cyan" hover delay={i * 0.08} className="p-5">
                {/* Centered content wrapper */}
                <div className="flex flex-col items-center justify-center text-center min-h-[90px]">
                  <p className="text-xl mb-1" style={{ color: stat.color }}>
                    {stat.icon}
                  </p>
                  <p className="text-2xl font-black mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  {/* Increased from text-xs to text-sm */}
                  <p className="text-sm text-slate-500 font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Bio text */}
          <div className="lg:col-span-2 space-y-4">
            <GlassCard delay={0.1} className="p-7">
              <p className="text-slate-300 leading-relaxed text-[15px]">
                I am currently pursuing my{" "}
                <span className="text-white font-semibold">
                  Bachelor of Engineering in Computer Science and Engineering
                </span>{" "}
                at Knowledge Institute of Technology, Salem. Throughout my academic
                journey, I have consistently demonstrated strong analytical and logical
                thinking abilities, reflected in my academic performance and technical
                achievements.
              </p>
            </GlassCard>

            <GlassCard delay={0.2} className="p-7">
              <p className="text-slate-300 leading-relaxed text-[15px]">
                I have gained practical exposure through{" "}
                <span className="text-white font-semibold">
                  internships and consultancy projects
                </span>{" "}
                across multiple domains including backend development, data science, and
                digital content creation. My technical interests span{" "}
                <span className="text-[#38BDF8] font-semibold">
                  Java development, web technologies, data analytics, and AI-based solutions.
                </span>{" "}
                I am also skilled in design tools such as Figma and Canva, enabling me to
                bridge the gap between development and user experience.
              </p>
            </GlassCard>

            <GlassCard delay={0.3} className="p-7">
              <div className="flex items-start gap-3">
                {/* <span className="text-2xl mt-0.5">🌟</span> */}
                <p className="text-slate-300 leading-relaxed text-[15px]">
                  I am a disciplined learner and have completed extensive online
                  certifications through{" "}
                  <span className="text-[#818CF8] font-semibold">NPTEL</span>, earning the
                  prestigious{" "}
                  <span className="text-yellow-400 font-bold">NPTEL Discipline Star</span>{" "}
                  for completing more than 50 weeks of learning. Highly motivated to
                  contribute to impactful projects and continuously upgrade my technical
                  and professional skill set.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
