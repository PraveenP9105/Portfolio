import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const achievements = [
  {
    icon: "🌟",
    title: "NPTEL Discipline Star",
    description: "Awarded for completing more than 50 weeks of learning across multiple NPTEL courses.",
    color: "#FCD34D",
  },
  {
    icon: "✅",
    title: "HackerRank Java (Basic) Certification",
    description: "Certified proficiency in Java fundamentals through HackerRank's official assessment.",
    color: "#34D399",
  },
  {
    icon: "⚡",
    title: "LC 200 Days Badge 2025",
    description: "Earned LeetCode's 200 Days Badge with 500+ problems solved across data structures and algorithms.",
    color: "#FB923C",
  },
];

export default function Achievements() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          category="★ SPOTLIGHT"
          title="Achievements"
          gradient="amber"
        />

        <div className="grid md:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              className="relative p-6 rounded-2xl overflow-hidden group cursor-default glass-panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                border: `1px solid ${ach.color}25`,
                boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.4), 0 0 20px ${ach.color}20`;
                e.currentTarget.style.borderColor = `${ach.color}50`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.3)`;
                e.currentTarget.style.borderColor = `${ach.color}25`;
              }}
            >
              {/* Glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at top, ${ach.color}10, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4"
                  style={{
                    background: `${ach.color}15`,
                    border: `1px solid ${ach.color}35`,
                    boxShadow: `0 0 16px ${ach.color}25`,
                  }}
                >
                  {ach.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-base">{ach.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
