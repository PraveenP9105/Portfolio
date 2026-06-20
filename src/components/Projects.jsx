import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import ProjectPosterCard from "./ui/ProjectPosterCard";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, interactive portfolio website built with React and Tailwind CSS featuring dark mode and infinite scrolling.",
    github: "https://github.com/PraveenP9105/Portfolio",
    demo: "#",
    demoText: "You're viewing it!",
  },
  {
    title: "Jira Clone",
    description: "A full-stack project management tool mirroring Jira's core functionalities. Built with React and Springboot.",
    github: "https://github.com/PraveenP9105/Jira-Clone",
    demo: "https://jira-clone-xi-green.vercel.app/",
  },
  {
    title: "Jumping Game",
    description: "An interactive and engaging web-based jumping game developed using React.",
    github: "https://github.com/PraveenP9105/Reacct-Game",
    demo: "https://reacct-game.vercel.app/",
  },
  {
    title: "Logistics Tracking System",
    description: "A comprehensive system to manage and track logistics operations seamlessly.",
    github: "https://github.com/PraveenP9105/Logistics-Frontend",
    demo: "",
  },
  {
    title: "Invoice Generator",
    description: "A robust application for generating, managing, and downloading invoices efficiently.",
    github: "https://github.com/PraveenP9105/Invoice-Generator",
    demo: "",
  },
  {
    title: "Attendance Tracker System",
    description: "A smart tracking system for monitoring attendance records with advanced analytics.",
    github: "https://github.com/mtanushkkumar-debug/attendancetracker",
    demo: "",
  },
  {
    title: "Ecommerce Site",
    description: "A fully functional e-commerce platform with a modern UI and secure backend.",
    github: "https://github.com/DeekshaMuralikumar/New_ECOMMERSE_WEBSITES-",
    demo: "",
  },
  {
    title: "Course Enrolment System",
    description: "An educational platform designed to streamline the student course enrolment process.",
    github: "https://github.com/KavyaSakthivel18/CES_System",
    demo: "",
  },
  {
    title: "Online Auction System",
    description: "A competitive bidding platform built with real-time updates and secure transactions.",
    github: "https://github.com/PraveenP9105/Online-Auction-System",
    demo: "",
  },
  {
    title: "Retail Ordering System",
    description: "An efficient ordering system for retail businesses to manage inventory and sales.",
    github: "https://github.com/HariPrasath-369/HCL_Hackathon_METHAMPHETAFIVE",
    demo: "",
  },
  {
    title: "Hospital Management System",
    description: "A centralized management system for handling hospital administration and patient records.",
    github: "",
    demo: "",
  },
];

// Dark-mode card gradients
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

// Light-mode card gradients — soft pastels on white-ish base
const lightGradients = [
  "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #EFF6FF 100%)",
  "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 50%, #F5F3FF 100%)",
  "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 50%, #F0FDF4 100%)",
  "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FFFBEB 100%)",
  "linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 50%, #FAF5FF 100%)",
  "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #F0F9FF 100%)",
  "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 50%, #FFF1F2 100%)",
  "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 50%, #F0FDFA 100%)",
  "linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 50%, #FEFCE8 100%)",
  "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #EFF6FF 100%)",
  "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 50%, #F0FDF4 100%)",
];

// Dark mode accents (bright/saturated)
const darkAccents = [
  "#38BDF8","#818CF8","#34D399","#F59E0B",
  "#A78BFA","#22D3EE","#F87171","#6EE7B7",
  "#FCD34D","#93C5FD","#6EE7B7",
];

// Light mode accents (deeper tones for contrast on light bg)
const lightAccents = [
  "#0284C7","#6366F1","#059669","#D97706",
  "#7C3AED","#0891B2","#DC2626","#047857",
  "#B45309","#2563EB","#065F46",
];

// Duplicate for seamless infinite loop (desktop)
const infiniteProjects = [...projects, ...projects];

/* ── Hotstar-style mobile card ──────────────────────── */
function HotstarCard({ project, index, isActive }) {
  const { isDark } = useTheme();

  const accent   = isDark ? darkAccents[index % darkAccents.length]    : lightAccents[index % lightAccents.length];
  const gradient = isDark ? darkGradients[index % darkGradients.length] : lightGradients[index % lightGradients.length];

  const cardShadow = isDark
    ? (isActive ? `0 20px 60px rgba(0,0,0,0.65), 0 0 0 1.5px ${accent}55` : "0 8px 28px rgba(0,0,0,0.45)")
    : (isActive ? `0 12px 36px rgba(0,0,0,0.12), 0 0 0 1.5px ${accent}45` : "0 4px 16px rgba(0,0,0,0.08)");

  const titleColor = isDark ? "#FFFFFF"              : "#0D1117";
  const descColor  = isDark ? "rgba(148,163,184,0.9)" : "rgba(30,41,59,0.80)";
  const btnBg      = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)";
  const btnBorder  = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.14)";
  const btnColor   = isDark ? "#CBD5E1"              : "#1E293B";

  return (
    <motion.div
      className="relative w-full flex-shrink-0 rounded-3xl overflow-hidden"
      style={{
        background: gradient,
        boxShadow: cardShadow,
        border: isDark ? "1px solid rgba(255,255,255,0.08)" : `1px solid ${accent}30`,
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* ── Art area (same 170px height as desktop) ── */}
      <div className="relative overflow-hidden" style={{ height: "170px" }}>
        <div
          className="absolute inset-0"
          style={{
            opacity: isDark ? 0.18 : 0.22,
            backgroundImage: `linear-gradient(${accent}35 1px, transparent 1px), linear-gradient(90deg, ${accent}35 1px, transparent 1px)`,
            backgroundSize: "26px 26px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 35% 45%, ${accent}${isDark ? "32" : "22"} 0%, transparent 65%)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[80px] font-black tracking-tighter" style={{ color: accent, opacity: isDark ? 0.08 : 0.12 }}>
            {project.title.charAt(0)}
          </span>
        </div>
        <div
          className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: isDark ? `${accent}20` : `${accent}15`, border: `1px solid ${accent}45`, color: accent, backdropFilter: "blur(8px)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── Content panel (same structure as desktop) ── */}
      <div
        className="p-5"
        style={{ background: isDark ? "transparent" : "rgba(255,255,255,0.55)", backdropFilter: isDark ? "none" : "blur(8px)" }}
      >
        <h3 className="font-bold text-base mb-2 leading-snug" style={{ color: titleColor }}>{project.title}</h3>
        <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: descColor }}>{project.description}</p>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ background: btnBg, border: `1px solid ${btnBorder}`, color: btnColor }}
              onClick={(e) => e.stopPropagation()}>
              <FaGithub size={11} /> Code
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ background: isDark ? `${accent}22` : `${accent}14`, border: `1px solid ${accent}55`, color: accent }}
              onClick={(e) => e.stopPropagation()}>
              <FaExternalLinkAlt size={10} /> Demo
            </a>
          )}
          {project.demo === "#" && (
            <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ background: isDark ? `${accent}20` : `${accent}12`, border: `1px solid ${accent}45`, color: accent }}>
              Live ✓
            </span>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }} />
    </motion.div>
  );
}

/* ── Hotstar-style infinite carousel (mobile only) ─── */
function HotstarCarousel() {
  const { isDark } = useTheme();
  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const touchStartX = useRef(null);

  const goTo = (idx) => setCurrent(((idx % total) + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const accent = isDark
    ? darkAccents[current % darkAccents.length]
    : lightAccents[current % lightAccents.length];

  const btnStyle = {
    background: isDark ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.80)",
    border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.12)",
    backdropFilter: "blur(8px)",
    color: isDark ? "white" : "#1E293B",
  };

  return (
    <div className="relative w-full px-4" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {/* Active card */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.93, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        <HotstarCard project={projects[current]} index={current} isActive />
      </motion.div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 mt-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              height: "4px",
              flex: i === current ? 3 : 1,
              background: i === current ? accent : (isDark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.15)"),
            }}
          />
        ))}
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
        style={btnStyle}
      >
        <FaChevronLeft size={13} />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-6 top-1/3 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110"
        style={btnStyle}
      >
        <FaChevronRight size={13} />
      </button>
    </div>
  );
}

export default function Projects() {
  const { isDark } = useTheme();
  const fadeLeft  = isDark ? "linear-gradient(90deg, #05070D, transparent)"  : "linear-gradient(90deg, #F0F4FF, transparent)";
  const fadeRight = isDark ? "linear-gradient(-90deg, #05070D, transparent)" : "linear-gradient(-90deg, #F0F4FF, transparent)";

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <SectionTitle
          category="▣ FEATURED WORK"
          title="Full-Stack Projects"
          gradient="cyan"
          subtitle="React, Springboot & Java applications — hover to explore."
        />
      </div>

      {/* ── Mobile: Hotstar-style swipe carousel ── */}
      <div className="md:hidden mb-8">
        <HotstarCarousel />
      </div>

      {/* ── Desktop: infinite auto-scroll carousel ── */}
      <div className="hidden md:block relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: fadeLeft }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: fadeRight }}
        />
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] py-4">
          {infiniteProjects.map((project, index) => (
            <ProjectPosterCard
              key={index}
              {...project}
              index={index % projects.length}
            />
          ))}
        </div>
      </div>

      {/* View all on GitHub */}
      <motion.div
        className="text-center mt-8 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://github.com/PraveenP9105"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: "var(--c-text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#38BDF8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-text-muted)")}
        >
          View all on GitHub →
        </a>
      </motion.div>
    </section>
  );
}
