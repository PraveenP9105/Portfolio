import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHome, FaUser, FaCode, FaLaptopCode, FaBriefcase, FaEnvelope, FaSun, FaMoon
} from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

const navItems = [
  { label: "Home",        href: "#home",        icon: <FaHome size={14} /> },
  { label: "About",       href: "#about",       icon: <FaUser size={13} /> },
  { label: "Skills",      href: "#skills",      icon: <FaCode size={14} /> },
  { label: "Projects",    href: "#projects",    icon: <FaLaptopCode size={14} /> },
  { label: "Internships", href: "#internships", icon: <FaBriefcase size={13} /> },
  { label: "Contact",     href: "#contact",     icon: <FaEnvelope size={13} /> },
];

const shortLabels = ["Home","About","Skills","Work","Exp","Reach"];

export default function FloatingNavbar() {
  const { isDark, toggleTheme } = useTheme();
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(navItems[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const boxShadow = scrolled
    ? "0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.10)"
    : "0 4px 20px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.07)";

  return (
    <>
      {/* ── Desktop nav: TOP-RIGHT — only shown on md+ (768px+) ──────── */}
      {/* Regular div.hidden.md:flex guarantees framer-motion can't override display */}
      <div className="hidden md:flex fixed top-5 right-5 z-50">
        <motion.nav
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          aria-label="Main navigation"
        >
          <div
            className="glass-nav flex items-center rounded-full"
            style={{ padding: "5px 8px", gap: "2px", boxShadow, transition: "box-shadow 0.3s ease" }}
          >
            {/* Logo */}
            <a
              href="#home"
              className="flex-shrink-0 px-3 py-1.5 rounded-full font-black text-[12px] mr-1"
              style={{
                background: "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.2))",
                border: "1px solid rgba(56,189,248,0.4)",
                color: "#38BDF8",
                whiteSpace: "nowrap",
              }}
            >
              PP
            </a>

            {/* Nav links — icon only at md-lg, full label at lg+ */}
            {navItems.map((item) => {
              const isActive = active === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className="relative flex-shrink-0 rounded-full font-semibold transition-colors duration-200"
                  style={{
                    color: isActive ? "#38BDF8" : "var(--c-text-muted)",
                    padding: "6px 9px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-active"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(56,189,248,0.13)",
                        border: "1px solid rgba(56,189,248,0.45)",
                        boxShadow: "0 0 16px rgba(56,189,248,0.25)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {/* Icon only at md (768-1023px) */}
                    <span className="lg:hidden" title={item.label}>{item.icon}</span>
                    {/* Full label at lg+ (1024px+) */}
                    <span className="hidden lg:inline text-[13px]">{item.label}</span>
                  </span>
                </a>
              );
            })}

            {/* Resume */}
            <a
              href="/Praveen P Resume.pdf"
              download="Praveen P Resume.pdf"
              className="flex-shrink-0 ml-1 rounded-full font-bold transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #38BDF8, #818CF8)",
                color: "#05070D",
                fontSize: "11px",
                padding: "6px 12px",
                whiteSpace: "nowrap",
              }}
            >
              <span className="hidden lg:inline">Resume</span>
              <span className="lg:hidden">CV</span>
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex-shrink-0 ml-1 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: isDark ? "rgba(56,189,248,0.12)" : "rgba(251,191,36,0.15)",
                border: isDark ? "1px solid rgba(56,189,248,0.35)" : "1px solid rgba(251,191,36,0.50)",
                color: isDark ? "#38BDF8" : "#F59E0B",
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={12} /> : <FaMoon size={12} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ── Mobile nav: BOTTOM-CENTER — only shown below md (< 768px) ── */}
      {/* IMPORTANT: no display property in style={} — that would override md:hidden */}
      <div
        className="md:hidden fixed z-50 bottom-0 left-0 right-0 flex justify-center"
        style={{
          paddingBottom: "max(12px, env(safe-area-inset-bottom, 12px))",
          pointerEvents: "none",
        }}
      >
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          aria-label="Mobile navigation"
          style={{ pointerEvents: "auto" }}
        >
          <div
            className="glass-nav flex items-center rounded-full"
            style={{
              padding: "7px 8px",
              gap: "2px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.60), 0 0 0 1px rgba(255,255,255,0.12)",
            }}
          >
            {navItems.map((item, i) => {
              const isActive = active === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className="relative flex flex-col items-center justify-center rounded-full transition-all"
                  style={{
                    color: isActive ? "#38BDF8" : "var(--c-text-muted)",
                    padding: "6px 10px",
                    minWidth: "44px",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-active"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(56,189,248,0.16)",
                        border: "1px solid rgba(56,189,248,0.42)",
                        boxShadow: "0 0 12px rgba(56,189,248,0.28)",
                      }}
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 mb-0.5">{item.icon}</span>
                  <span className="relative z-10 font-bold" style={{ fontSize: "9px" }}>
                    {shortLabels[i]}
                  </span>
                </a>
              );
            })}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex-shrink-0 ml-1 rounded-full flex items-center justify-center transition-all"
              style={{
                width: "38px",
                height: "38px",
                background: isDark ? "rgba(56,189,248,0.12)" : "rgba(251,191,36,0.15)",
                border: isDark ? "1px solid rgba(56,189,248,0.35)" : "1px solid rgba(251,191,36,0.50)",
                color: isDark ? "#38BDF8" : "#F59E0B",
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={13} /> : <FaMoon size={13} />}
            </button>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
