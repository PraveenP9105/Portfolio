import { motion } from "framer-motion";

/**
 * SectionTitle — animated section heading with category label and accent bar
 * Props:
 *   category  — small label above (e.g., "◈ FEATURED")
 *   title     — main heading text
 *   subtitle  — optional subtitle
 *   gradient  — "cyan" | "violet" | "green" | "amber"
 */
const gradientMap = {
  cyan: "linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)",
  violet: "linear-gradient(135deg, #818CF8 0%, #EC4899 100%)",
  green: "linear-gradient(135deg, #34D399 0%, #38BDF8 100%)",
  amber: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
  blue: "linear-gradient(135deg, #3B82F6 0%, #38BDF8 100%)",
};

export default function SectionTitle({
  category,
  title,
  subtitle,
  gradient = "cyan",
}) {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {category && (
        <p className="text-xs font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">
          {category}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl font-black"
        style={{
          background: gradientMap[gradient] || gradientMap.cyan,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h2>
      {/* Accent bar */}
      <div
        className="mt-3 h-[3px] w-12 rounded-full"
        style={{ background: gradientMap[gradient] || gradientMap.cyan }}
      />
      {subtitle && (
        <p className="mt-4 text-slate-400 text-base max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
