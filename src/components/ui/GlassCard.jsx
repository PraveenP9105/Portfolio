import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

/**
 * GlassCard — reusable glassmorphism card
 * Props:
 *   className — extra classes
 *   glow      — "cyan" | "violet" | "green" | "amber" | "blue" | none
 *   hover     — enable hover scale animation
 *   delay     — animation delay in seconds
 */
export default function GlassCard({
  children,
  className = "",
  glow,
  hover = false,
  delay = 0,
  animate = true,
}) {
  const { isDark } = useTheme();

  /* ── Dark mode — rich depth shadows ── */
  const darkGlow = {
    cyan:   "0 0 28px rgba(56,189,248,0.18),  0 8px 24px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.10)",
    violet: "0 0 28px rgba(129,140,248,0.18), 0 8px 24px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.10)",
    green:  "0 0 28px rgba(52,211,153,0.18),  0 8px 24px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.10)",
    amber:  "0 0 28px rgba(251,191,36,0.18),  0 8px 24px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.10)",
    blue:   "0 0 28px rgba(59,130,246,0.18),  0 8px 24px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.10)",
  };
  const darkBase = "0 8px 28px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.10)";

  /* ── Light mode — soft coloured shadow + white inner shine ── */
  const lightGlow = {
    cyan:   "0 4px 20px rgba(2,132,199,0.16),   0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
    violet: "0 4px 20px rgba(99,102,241,0.16),  0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
    green:  "0 4px 20px rgba(5,150,105,0.14),   0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
    amber:  "0 4px 20px rgba(217,119,6,0.14),   0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
    blue:   "0 4px 20px rgba(37,99,235,0.14),   0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
  };
  const lightBase = "0 2px 16px rgba(80,80,180,0.10), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)";

  const glowMap  = isDark ? darkGlow  : lightGlow;
  const baseShadow = isDark ? darkBase : lightBase;

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 24 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      className={`relative overflow-hidden rounded-3xl glass-surface ${className}`}
      style={{
        boxShadow: glow ? glowMap[glow] || baseShadow : baseShadow,
      }}
    >
      {/* Inner highlight edge — brighter in light mode */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{
          background: isDark
            ? "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.70) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
