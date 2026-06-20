import { useState } from "react";
import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";
import GlassCard from "./ui/GlassCard";
import LiquidButton from "./ui/LiquidButton";
import SectionTitle from "./ui/SectionTitle";
import { useTheme } from "../contexts/ThemeContext";

export default function ContactForm() {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus]       = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSuccess(false);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/palanisamypspa@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (result.success) {
        setStatus("✓ Message sent successfully!");
        setIsSuccess(true);
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  /* ── Theme-aware input tokens ── */
  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none";

  const inputStyle = isDark
    ? {
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#E2E8F0",
      }
    : {
        background: "rgba(99,102,241,0.05)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(99,102,241,0.28)",
        color: "#0D1117",
      };

  const placeholderColor = isDark ? "#64748B" : "#94A3B8";

  /* focus / blur border colours */
  const focusBorder   = "1px solid rgba(56,189,248,0.55)";
  const focusShadow   = "0 0 0 3px rgba(56,189,248,0.12)";
  const blurBorder    = isDark
    ? "1px solid rgba(255,255,255,0.12)"
    : "1px solid rgba(99,102,241,0.28)";

  const sharedHandlers = {
    onFocus: (e) => {
      e.target.style.border    = focusBorder;
      e.target.style.boxShadow = focusShadow;
    },
    onBlur: (e) => {
      e.target.style.border    = blurBorder;
      e.target.style.boxShadow = "none";
    },
  };

  return (
    <section className="py-20 px-6 pb-32 md:pb-20">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          category="✉ MESSAGE"
          title="Leave a Message"
          gradient="cyan"
        />

        <GlassCard delay={0.15} className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ ...inputStyle, caretColor: "#38BDF8" }}
                  {...sharedHandlers}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ ...inputStyle, caretColor: "#38BDF8" }}
                  {...sharedHandlers}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                Mobile (Optional)
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className={inputClass}
                style={{ ...inputStyle, caretColor: "#38BDF8" }}
                {...sharedHandlers}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                style={{ ...inputStyle, caretColor: "#38BDF8" }}
                {...sharedHandlers}
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <LiquidButton type="submit" variant="primary">
                <FiZap size={15} /> Send Message
              </LiquidButton>

              {status && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm font-medium px-3 py-1.5 rounded-full"
                  style={{
                    background: isSuccess ? "rgba(52,211,153,0.12)" : "rgba(239,68,68,0.12)",
                    border: `1px solid ${isSuccess ? "rgba(52,211,153,0.3)" : "rgba(239,68,68,0.3)"}`,
                    color: isSuccess ? "#34D399" : "#F87171",
                  }}
                >
                  {status}
                </motion.span>
              )}
            </div>
          </form>
        </GlassCard>

        {/* Global placeholder colour — CSS can't be done inline */}
        <style>{`
          html.light .contact-form-input::placeholder { color: #94A3B8; }
          html.dark  .contact-form-input::placeholder { color: #475569; }
        `}</style>
      </div>
    </section>
  );
}