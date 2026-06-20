import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * SkillChip — glass capsule skill chip with magnetic hover
 * Props:
 *   label  — skill name
 *   color  — accent color in dark mode (hex, e.g. "#38BDF8")
 *   delay  — stagger delay
 */

/* Richer light-mode colour map for readability on white background */
const lightColorMap = {
  "#38BDF8": "#0284C7", // sky → deep sky
  "#34D399": "#059669", // emerald → deep emerald
  "#F59E0B": "#D97706", // amber → deep amber
  "#818CF8": "#6366F1", // indigo → vibrant indigo
  "#A78BFA": "#7C3AED", // purple → deep purple
  "#22D3EE": "#0891B2", // cyan → deep cyan
  "#F87171": "#DC2626", // red → deep red
  "#6EE7B7": "#047857", // teal → deep teal
  "#FCD34D": "#B45309", // yellow → brown
  "#93C5FD": "#2563EB", // blue → vivid blue
};

export default function SkillChip({ label, color = "#38BDF8", delay = 0 }) {
  const { isDark } = useTheme();

  /* In light mode, switch to a deeper variant of the colour for legibility */
  const activeColor = isDark ? color : (lightColorMap[color] || color);

  /* Background opacity: very subtle in both modes */
  const bgAlpha   = isDark ? "18" : "14";
  const brdAlpha  = isDark ? "40" : "35";
  const hovBg     = isDark ? "28" : "22";
  const hovBrd    = isDark ? "65" : "60";

  /* Shadow: glow in dark, coloured drop in light */
  const shadowOn  = isDark
    ? `0 0 16px ${activeColor}38`
    : `0 3px 12px ${activeColor}30, 0 1px 3px rgba(0,0,0,0.06)`;
  const shadowOff = isDark ? `0 0 0 0 ${activeColor}00` : "0 1px 3px rgba(0,0,0,0.04)";

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold cursor-default select-none"
      style={{
        background: `${activeColor}${bgAlpha}`,
        border: `1px solid ${activeColor}${brdAlpha}`,
        color: activeColor,
        backdropFilter: "blur(8px)",
        boxShadow: shadowOff,
        transition: "box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = shadowOn;
        e.currentTarget.style.background = `${activeColor}${hovBg}`;
        e.currentTarget.style.borderColor = `${activeColor}${hovBrd}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = shadowOff;
        e.currentTarget.style.background = `${activeColor}${bgAlpha}`;
        e.currentTarget.style.borderColor = `${activeColor}${brdAlpha}`;
      }}
    >
      {label}
    </motion.span>
  );
}
