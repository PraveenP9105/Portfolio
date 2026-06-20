import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import LiquidButton from "./ui/LiquidButton";

const roles = [
  "Software Developer",
  "Java & Springboot Engineer",
  "Data & AI Enthusiast",
  "Full-Stack Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(roles[0]);
  const [fading, setFading] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => { setDisplayedRole(roles[roleIndex]); }, [roleIndex]);

  // Parallax on mouse
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const floatX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const floatY = useTransform(smoothY, [-1, 1], [-10, 10]);
  const orbX   = useTransform(smoothX, [-1, 1], [-6, 6]);
  const orbY   = useTransform(smoothY, [-1, 1], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width  - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top)  / rect.height - 0.5) * 2);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      style={{ paddingTop: "80px", paddingBottom: "100px" }}
    >
      {/* Subtle hero radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(56,189,248,0.07) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 40% at 30% 70%, rgba(129,140,248,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          {/* ── Mobile-only avatar — centred column, ABOVE the name ── */}
          <motion.div
            className="flex md:hidden flex-col items-center mb-7"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65 }}
          >
            {/* Large avatar */}
            <div
              className="relative rounded-full overflow-hidden glass-surface-strong flex items-center justify-center mb-4"
              style={{
                width: "120px",
                height: "120px",
                boxShadow:
                  "0 0 0 3px rgba(56,189,248,0.50), " +
                  "0 0 36px rgba(56,189,248,0.30), " +
                  "0 10px 40px rgba(0,0,0,0.45)",
              }}
            >
              {!imgError ? (
                <img
                  src="/Praveen P Animated Pic.png"
                  alt="Praveen Palanisamy"
                  className="absolute inset-0 w-full h-full object-cover rounded-full select-none"
                  style={{ objectPosition: "top center", userSelect: "none" }}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onError={() => setImgError(true)}
                />
              ) : (
                <span
                  className="text-4xl font-black select-none"
                  style={{
                    background: "linear-gradient(135deg, #38BDF8, #818CF8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  P
                </span>
              )}
              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle at 30% 20%, rgba(56,189,248,0.20), transparent 60%)" }}
              />
            </div>

            {/* Badges row — centred below image */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { text: "◈ React & Java", color: "#38BDF8", border: "rgba(56,189,248,0.30)" },
                { text: "▷ Open to Work", color: "#818CF8", border: "rgba(129,140,248,0.30)" },
                { text: "★ NPTEL Star",   color: "#34D399", border: "rgba(52,211,153,0.30)" },
              ].map((badge) => (
                <span
                  key={badge.text}
                  className="glass-surface px-2.5 py-1 rounded-xl text-[11px] font-semibold"
                  style={{ color: badge.color, border: `1px solid ${badge.border}` }}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* "Featured Developer" label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xs font-bold tracking-[0.25em] text-slate-500 uppercase mb-4"
          >
            ◈ Featured Developer
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-5xl md:text-7xl font-black mb-4 leading-none tracking-tight"
          >
            <span className="text-white">Praveen</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #38BDF8 0%, #818CF8 60%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Palanisamy
            </span>
          </motion.h1>

          {/* Animated role */}
          <div className="h-8 mb-6 overflow-hidden">
            <motion.p
              key={displayedRole}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: fading ? 0 : 1, y: fading ? -8 : 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-lg font-semibold"
              style={{ color: "#38BDF8" }}
            >
              {displayedRole}
            </motion.p>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-slate-400 leading-relaxed text-base max-w-md mb-8"
          >
            CSE undergraduate at Knowledge Institute of Technology, Salem.
            Passionate about scalable software, analytics, and AI-driven solutions.
            Building premium digital experiences.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <LiquidButton href="#projects" variant="primary">
              <span>▣</span> View Projects
            </LiquidButton>
            <LiquidButton href="/Praveen P Resume.pdf" download="Praveen P Resume.pdf" variant="secondary">
              <span>↓</span> Download Resume
            </LiquidButton>
            <LiquidButton href="#contact" variant="secondary">
              <span>◎</span> Contact Me
            </LiquidButton>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 flex gap-6 flex-wrap"
          >
            {[
              { value: "11+",  label: "Projects" },
              { value: "3",    label: "Internships" },
              { value: "500+", label: "LeetCode" },
              { value: "8.29", label: "CGPA" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-black" style={{ color: "#38BDF8" }}>{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Floating avatar (desktop only) */}
        <motion.div
          className="hidden md:flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="absolute w-80 h-80 rounded-full"
            style={{ border: "1px solid rgba(56,189,248,0.15)", x: orbX, y: orbY }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full"
            style={{ border: "1px solid rgba(129,140,248,0.20)", x: floatX, y: floatY }}
          >
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: "#38BDF8", boxShadow: "0 0 8px #38BDF8" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              transformOrigin="50% 140px"
            />
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="relative w-48 h-48 rounded-full overflow-hidden glass-surface-strong flex items-center justify-center"
            style={{
              x: floatX,
              y: floatY,
              boxShadow:
                "0 0 0 2px rgba(56,189,248,0.40), 0 0 40px rgba(56,189,248,0.25), 0 20px 60px rgba(0,0,0,0.60)",
            }}
          >
            {!imgError ? (
              <img
                src="/Praveen P Animated Pic.png"
                alt="Praveen Palanisamy"
                className="absolute inset-0 w-full h-full object-cover rounded-full select-none"
                style={{ objectPosition: "top center", userSelect: "none" }}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onError={() => setImgError(true)}
              />
            ) : (
              <span
                className="text-6xl font-black select-none"
                style={{
                  background: "linear-gradient(135deg, #38BDF8, #818CF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                P
              </span>
            )}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle at 30% 20%, rgba(56,189,248,0.15), transparent 60%)" }}
            />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute top-6 right-0 glass-surface px-3 py-2 rounded-2xl text-xs font-semibold"
            style={{ color: "#38BDF8", x: floatX, border: "1px solid rgba(56,189,248,0.25)" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            ◈ React & Java
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-0 glass-surface px-3 py-2 rounded-2xl text-xs font-semibold"
            style={{ color: "#818CF8", border: "1px solid rgba(129,140,248,0.25)" }}
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }}
          >
            ▷ Open to Work
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-2 glass-surface px-3 py-2 rounded-2xl text-xs font-semibold"
            style={{ color: "#34D399", border: "1px solid rgba(52,211,153,0.25)" }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
          >
            ★ NPTEL Star
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only to avoid mobile overlap */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--c-text-subtle)" }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          Scroll to explore
        </motion.span>
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="scroll-wheel" />
        </motion.div>
      </motion.div>
    </section>
  );
}
