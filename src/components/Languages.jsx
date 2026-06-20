import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const languages = [
  { name: "English", level: "Professional", icon: "🇬🇧", color: "#38BDF8" },
  { name: "Tamil", level: "Native", icon: "🇮🇳", color: "#818CF8" },
];

export default function Languages() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          category="◉ COMMUNICATION"
          title="Languages"
          gradient="violet"
        />

        <div className="flex flex-wrap gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl"
              style={{
                background: `${lang.color}08`,
                backdropFilter: "blur(12px)",
                border: `1px solid ${lang.color}25`,
                boxShadow: `0 4px 20px rgba(0,0,0,0.25)`,
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${lang.color}15`;
                e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,0,0,0.35), 0 0 16px ${lang.color}20`;
                e.currentTarget.style.borderColor = `${lang.color}45`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `${lang.color}08`;
                e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.25)`;
                e.currentTarget.style.borderColor = `${lang.color}25`;
              }}
            >
              <span className="text-2xl">{lang.icon}</span>
              <div>
                <p className="font-bold text-white text-base">{lang.name}</p>
                <p className="text-xs font-medium" style={{ color: lang.color }}>{lang.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
