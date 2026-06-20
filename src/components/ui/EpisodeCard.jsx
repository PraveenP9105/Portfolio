import { motion } from "framer-motion";

/**
 * EpisodeCard — streaming-style episode card for experience/internship entries
 */
export default function EpisodeCard({
  episode,
  title,
  company,
  duration,
  description,
  tech,
  accentColor = "#38BDF8",
  delay = 0,
}) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-6 flex-shrink-0 z-10"
          style={{
            background: accentColor,
            boxShadow: `0 0 12px ${accentColor}70`,
          }}
        />
        <div
          className="flex-1 w-px mt-2"
          style={{
            background: `linear-gradient(180deg, ${accentColor}60, transparent)`,
            minHeight: "40px",
          }}
        />
      </div>

      {/* Card — uses glass-panel CSS class for theme-aware background */}
      <div
        className="flex-1 mb-8 rounded-2xl p-6 relative overflow-hidden glass-panel"
        style={{
          borderLeft: `3px solid ${accentColor}`,
          boxShadow: `0 4px 24px rgba(0,0,0,0.3), -4px 0 20px ${accentColor}15`,
        }}
      >
        {/* Inner glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top left, ${accentColor}08, transparent 60%)`,
          }}
        />

        <div className="relative z-10">
          {/* Episode badge + duration */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span
              className="text-xs font-bold tracking-widest px-2 py-1 rounded-full"
              style={{
                background: `${accentColor}15`,
                border: `1px solid ${accentColor}35`,
                color: accentColor,
              }}
            >
              #{episode}
            </span>
            {duration && (
              <span className="text-sm text-slate-500 font-medium">{duration}</span>
            )}
          </div>

          <h3 className="text-lg font-bold mb-1" style={{ color: accentColor }}>
            {title}
          </h3>
          <p className="text-sm font-semibold text-slate-300 mb-3">{company}</p>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>

          {tech && (
            <p className="text-sm text-slate-400">
              <span className="text-slate-300 font-semibold">Stack: </span>
              {tech}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
