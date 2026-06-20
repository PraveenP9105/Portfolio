import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

const darkGradients = [
  "linear-gradient(135deg, #0F1729 0%, #1E3A5F 50%, #0A2A4A 100%)",
  "linear-gradient(135deg, #150B2E 0%, #2D1B5E 50%, #1A0F3C 100%)",
  "linear-gradient(135deg, #0B2318 0%, #1A4731 50%, #0D2B1F 100%)",
  "linear-gradient(135deg, #2A1200 0%, #5C2E00 50%, #3D1F00 100%)",
  "linear-gradient(135deg, #1A0A2E 0%, #3D1A5E 50%, #250E3F 100%)",
  "linear-gradient(135deg, #001A2C 0%, #003D6B 50%, #00253F 100%)",
  "linear-gradient(135deg, #1F0A0A 0%, #4A1515 50%, #300D0D 100%)",
  "linear-gradient(135deg, #0A1A1A 0%, #154040 50%, #0D2A2A 100%)",
  "linear-gradient(135deg, #1A1200 0%, #3D2E00 50%, #2A1E00 100%)",
  "linear-gradient(135deg, #0A0A1F 0%, #20205A 50%, #141440 100%)",
  "linear-gradient(135deg, #001A10 0%, #00453D 50%, #002A2A 100%)",
];

const lightGradients = [
  "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #EFF6FF 100%)",
  "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 60%, #F5F3FF 100%)",
  "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 60%, #F0FDF4 100%)",
  "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 60%, #FFFBEB 100%)",
  "linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 60%, #FAF5FF 100%)",
  "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 60%, #F0F9FF 100%)",
  "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 60%, #FFF1F2 100%)",
  "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 60%, #F0FDFA 100%)",
  "linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 60%, #FEFCE8 100%)",
  "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #EFF6FF 100%)",
  "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 60%, #F0FDF4 100%)",
];

const darkAccents = [
  "#38BDF8", "#818CF8", "#34D399", "#F59E0B",
  "#A78BFA", "#22D3EE", "#F87171", "#6EE7B7",
  "#FCD34D", "#93C5FD", "#6EE7B7",
];

const lightAccents = [
  "#0284C7", "#6366F1", "#059669", "#D97706",
  "#7C3AED", "#0891B2", "#DC2626", "#047857",
  "#B45309", "#2563EB", "#065F46",
];

export default function ProjectPosterCard({ title, description, github, demo, demoText, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { isDark } = useTheme();

  const gradient = isDark
    ? darkGradients[index % darkGradients.length]
    : lightGradients[index % lightGradients.length];
  const accent = isDark
    ? darkAccents[index % darkAccents.length]
    : lightAccents[index % lightAccents.length];

  /* ── Theme-aware tokens ── */
  const cardBorder = isDark
    ? `1px solid rgba(255,255,255,0.08)`
    : `1px solid ${accent}30`;
  const cardShadow = hovered
    ? (isDark
        ? `0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px ${accent}40`
        : `0 12px 40px rgba(0,0,0,0.15), 0 0 0 1px ${accent}45`)
    : (isDark
        ? "0 8px 32px rgba(0,0,0,0.5)"
        : "0 4px 16px rgba(0,0,0,0.08)");

  const titleColor   = isDark ? "#FFFFFF"                     : "#0D1117";
  const descColor    = isDark ? "rgba(148,163,184,0.9)"        : "rgba(30,41,59,0.80)";
  const codeBtnBg    = isDark ? "rgba(255,255,255,0.08)"       : "rgba(0,0,0,0.05)";
  const codeBtnBord  = isDark ? "rgba(255,255,255,0.15)"       : "rgba(0,0,0,0.14)";
  const codeBtnColor = isDark ? "#CBD5E1"                      : "#1E293B";

  return (
    <motion.div
      className="relative flex-shrink-0 mx-3 rounded-3xl overflow-hidden cursor-pointer"
      style={{
        /* Same fixed size on desktop and mobile */
        width: "300px",
        background: gradient,
        border: cardBorder,
        boxShadow: cardShadow,
        transition: "box-shadow 0.3s ease",
      }}
      whileHover={{ scale: 1.04, y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Poster art area */}
      <div className="relative overflow-hidden" style={{ height: "170px" }}>
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            opacity: isDark ? 0.20 : 0.22,
            backgroundImage: `linear-gradient(${accent}30 1px, transparent 1px), linear-gradient(90deg, ${accent}30 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `radial-gradient(circle at center, ${accent}${isDark ? "30" : "25"} 0%, transparent 70%)` }}
        />
        {/* Title initial */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-5xl font-black tracking-tighter"
            style={{ color: accent, opacity: isDark ? 0.20 : 0.15 }}
          >
            {title.charAt(0)}
          </span>
        </div>
        {/* Index badge */}
        <div
          className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full"
          style={{
            background: isDark ? `${accent}20` : `${accent}18`,
            border: `1px solid ${accent}45`,
            color: accent,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content panel */}
      <div
        className="p-5"
        style={{
          background: isDark ? "transparent" : "rgba(255,255,255,0.55)",
          backdropFilter: isDark ? "none" : "blur(8px)",
        }}
      >
        <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: titleColor }}>
          {title}
        </h3>
        <motion.p
          className="text-sm leading-relaxed mb-4"
          style={{ color: descColor, minHeight: "52px" }}
          animate={{ opacity: hovered ? 1 : 0.75 }}
        >
          {description}
        </motion.p>

        {/* Action buttons — fade in on hover */}
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
              style={{
                background: codeBtnBg,
                border: `1px solid ${codeBtnBord}`,
                color: codeBtnColor,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={12} /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target={demo === "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
              style={{
                background: isDark ? `${accent}20` : `${accent}15`,
                border: `1px solid ${accent}55`,
                color: accent,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={10} /> {demoText || "Demo"}
            </a>
          )}
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
      />
    </motion.div>
  );
}
