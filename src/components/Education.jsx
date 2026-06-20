import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const degrees = [
  {
    level: "BE",
    title: "Bachelor of Engineering – Computer Science and Engineering",
    institution: "Knowledge Institute of Technology, Salem",
    duration: "November 2022 – March 2026",
    score: "Percentage: 83%",
    accentColor: "#38BDF8",
    icon: "🎓",
  },
  {
    level: "HSC",
    title: "Higher Secondary Certificate (HSC)",
    institution: "Sengunthar Matric Higher Secondary School, Tharamangalam",
    duration: "Year: 2022",
    score: "Percentage: 87%",
    accentColor: "#34D399",
    icon: "📚",
  },
  {
    level: "SSLC",
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sengunthar Matric Higher Secondary School, Tharamangalam",
    duration: "Year: 2020",
    score: "Percentage: 95%",
    accentColor: "#F59E0B",
    icon: "🏫",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          category="◈ ACADEMY"
          title="Education"
          gradient="green"
        />

        <div className="space-y-5">
          {degrees.map((deg, i) => (
            <motion.div
              key={deg.level}
              className="relative flex gap-5 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black z-10 flex-shrink-0"
                  style={{
                    background: `${deg.accentColor}18`,
                    border: `2px solid ${deg.accentColor}50`,
                    color: deg.accentColor,
                    boxShadow: `0 0 16px ${deg.accentColor}30`,
                  }}
                >
                  {deg.level === "BE" ? "BE" : deg.level}
                </div>
                {i < degrees.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{
                      background: `linear-gradient(180deg, ${deg.accentColor}50, ${degrees[i + 1].accentColor}20)`,
                      minHeight: "24px",
                    }}
                  />
                )}
              </div>

              {/* Card */}
              <div
                className="flex-1 mb-2 p-6 rounded-2xl relative overflow-hidden transition-all duration-300 glass-panel"
                style={{
                  borderLeft: `3px solid ${deg.accentColor}`,
                  boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.4), -4px 0 20px ${deg.accentColor}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.3)`;
                }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${deg.accentColor}06, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-base text-white mb-1 flex items-center gap-2">
                      <span>{deg.icon}</span> {deg.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mb-1">{deg.institution}</p>
                    <p className="text-sm text-slate-500">{deg.duration}</p>
                  </div>
                  <span
                    className="text-sm font-bold px-4 py-1.5 rounded-full flex-shrink-0 self-start"
                    style={{
                      background: `${deg.accentColor}15`,
                      border: `1px solid ${deg.accentColor}40`,
                      color: deg.accentColor,
                    }}
                  >
                    {deg.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
