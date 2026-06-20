import { useTheme } from "../../contexts/ThemeContext";

export default function GlowBackground() {
  const { isDark } = useTheme();

  const opacity = isDark ? 1 : 0.3;
  const lightMultiplier = isDark ? 1 : 0.4;

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Orb 1 — Cyan top-left */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full animate-orb-pulse"
          style={{
            background: `radial-gradient(circle, rgba(56,189,248,${0.18 * lightMultiplier}) 0%, rgba(56,189,248,${0.06 * lightMultiplier}) 50%, transparent 70%)`,
            animationDelay: "0s",
            animationDuration: "8s",
            opacity,
          }}
        />

        {/* Orb 2 — Violet center-right */}
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full animate-orb-drift"
          style={{
            background: `radial-gradient(circle, rgba(129,140,248,${0.16 * lightMultiplier}) 0%, rgba(129,140,248,${0.05 * lightMultiplier}) 50%, transparent 70%)`,
            animationDelay: "-3s",
            animationDuration: "12s",
            opacity,
          }}
        />

        {/* Orb 3 — Blue bottom-center */}
        <div
          className="absolute -bottom-20 left-1/3 w-[700px] h-[400px] rounded-full animate-orb-pulse"
          style={{
            background: `radial-gradient(circle, rgba(59,130,246,${0.12 * lightMultiplier}) 0%, rgba(59,130,246,${0.04 * lightMultiplier}) 50%, transparent 70%)`,
            animationDelay: "-5s",
            animationDuration: "10s",
            opacity,
          }}
        />

        {/* Orb 4 — Green teal faint top-right */}
        <div
          className="absolute -top-20 right-1/4 w-[300px] h-[300px] rounded-full animate-float-slow"
          style={{
            background: `radial-gradient(circle, rgba(52,211,153,${0.10 * lightMultiplier}) 0%, transparent 70%)`,
            animationDelay: "-2s",
            opacity,
          }}
        />

        {/* Light beam sweeps */}
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(56,189,248,${isDark ? 0.8 : 0.4}) 50%, transparent 100%)`,
            animation: "shimmer 6s linear infinite",
            backgroundSize: "200% 100%",
            opacity: isDark ? 0.2 : 0.15,
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-full h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(129,140,248,${isDark ? 0.6 : 0.3}) 50%, transparent 100%)`,
            animation: "shimmer 9s linear infinite reverse",
            backgroundSize: "200% 100%",
            opacity: isDark ? 0.10 : 0.08,
          }}
        />
      </div>
    </>
  );
}
