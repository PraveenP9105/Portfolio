import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const certs = [
  { name: "Python", icon: "🐍" },
  { name: "C Programming", icon: "⚙️" },
  { name: "Internet of Things (IoT)", icon: "🌐" },
  { name: "Industry 4.0", icon: "🏭" },
  { name: "Ethical Hacking", icon: "🛡️" },
  { name: "Privacy & Security in Online Social Media", icon: "🔒" },
];

export default function Certifications() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          category="◈ CREDENTIALS"
          title="Certifications"
          gradient="violet"
        />

        <GlassCard delay={0.15} className="p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8 flex-wrap gap-y-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{
                background: "rgba(129,140,248,0.15)",
                border: "1px solid rgba(129,140,248,0.35)",
              }}
            >
              🏅
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">NPTEL Certifications</h3>
              <p className="text-xs text-slate-500 mt-0.5">National Programme on Technology Enhanced Learning</p>
            </div>
            <div className="ml-auto flex-shrink-0">
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(251,191,36,0.12)",
                  border: "1px solid rgba(251,191,36,0.3)",
                  color: "#FCD34D",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                }}
              >
                ★ Discipline Star
              </span>
            </div>
          </div>

          {/* Cert grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 cursor-default"
                style={{
                  background: "rgba(129,140,248,0.07)",
                  border: "1px solid rgba(129,140,248,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(129,140,248,0.12)";
                  e.currentTarget.style.borderColor = "rgba(129,140,248,0.30)";
                  e.currentTarget.style.boxShadow = "0 0 14px rgba(129,140,248,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(129,140,248,0.07)";
                  e.currentTarget.style.borderColor = "rgba(129,140,248,0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="text-xl">{cert.icon}</span>
                <span className="text-base font-medium text-slate-300">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
