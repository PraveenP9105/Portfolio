export default function Footer() {
  return (
    <footer
      className="pt-8 text-center relative overflow-hidden"
      style={{
        /* On mobile, add bottom padding = nav bar height so it's not obscured */
        paddingBottom: "calc(80px + env(safe-area-inset-bottom, 0px))",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {/* Gradient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.60), rgba(129,140,248,0.60), transparent)",
        }}
      />

      <p
        className="text-sm font-semibold"
        style={{ color: "var(--c-text-muted)" }}
      >
        © {new Date().getFullYear()}{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #38BDF8, #818CF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Praveen P
        </span>
        . All rights reserved.
      </p>
      <p className="text-sm font-medium mt-1.5" style={{ color: "var(--c-text-subtle)" }}>
        Built with React · Framer Motion · TailwindCSS
      </p>

      {/* Mobile-only spacer hint */}
      <p className="md:hidden text-[10px] mt-2" style={{ color: "var(--c-text-subtle)", opacity: 0.5 }}>
        ↑ Swipe up to navigate
      </p>
    </footer>
  );
}
