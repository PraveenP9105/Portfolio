import { motion } from "framer-motion";

/**
 * LiquidButton — glass pill button
 * Props:
 *   variant  — "primary" | "secondary"
 *   href     — renders as <a> if provided
 *   onClick
 *   className
 *   children
 *   download — for download links
 *   target
 */
export default function LiquidButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  download,
  target,
  type = "button",
}) {
  const baseClasses = `
    inline-flex items-center gap-2 px-6 py-3 rounded-full
    font-semibold text-sm tracking-wide
    transition-all duration-300 cursor-pointer
    ${variant === "primary" ? "liquid-button text-[#38BDF8]" : "liquid-button-secondary text-[#94A3B8]"}
    ${className}
  `;

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
