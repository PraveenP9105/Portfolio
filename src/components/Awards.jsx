import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const awards = [
  {
    icon: "🏆",
    title: "ISTE Best Student Award",
    description: "Recognized as the best student by the Indian Society for Technical Education chapter.",
    color: "#F59E0B",
    rank: "01",
  },
  {
    icon: "🎖️",
    title: "Achiever Award",
    description: "Received on Achievers Day in 2024 and 2026 for outstanding academic and technical contributions.",
    color: "#38BDF8",
    rank: "02",
  },
  {
    icon: "🥇",
    title: "First Prize – QueryWhizz Event",
    description: "Won first prize at the QueryWhizz symposium event conducted by the Government College of Engineering, Salem.",
    color: "#818CF8",
    rank: "03",
  },
];

export default function Awards() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          category="🏆 TROPHY CASE"
          title="Awards"
          gradient="amber"
        />

        <div className="grid md:grid-cols-3 gap-5">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              className="relative p-7 rounded-2xl overflow-hidden glass-panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                border: `1px solid ${award.color}25`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 30px ${award.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 24px rgba(0,0,0,0.3)`;
              }}
            >
              {/* Rank number — large watermark */}
              <div
                className="absolute top-3 right-5 text-6xl font-black opacity-[0.20] select-none"
                style={{ color: award.color }}
              >
                {award.rank}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: `${award.color}15`,
                  border: `1px solid ${award.color}35`,
                  boxShadow: `0 0 20px ${award.color}20`,
                }}
              >
                {award.icon}
              </div>

              <h3 className="font-bold text-white text-base mb-2">{award.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{award.description}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${award.color}50, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
