import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const contactItems = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "4-57, Seeranganoor, Periyasoragai (Post), Mettur (Taluk), Salem – 636502",
    color: "#34D399",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "palanisamypspa@gmail.com",
    href: "mailto:palanisamypspa@gmail.com",
    color: "#38BDF8",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+91 6381982535",
    href: "tel:+916381982535",
    color: "#818CF8",
  },
];

const socials = [
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/praveen-p-913681218",
    color: "#38BDF8",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/PraveenP9105",
    color: "#94A3B8",
  },
  {
    icon: "💻",
    label: "LeetCode",
    href: "https://leetcode.com/u/PraveenP9105/",
    color: "#FB923C",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          category="◎ PROFILE"
          title="Contact"
          gradient="green"
          subtitle="Let's connect and build something great together."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact info */}
          <GlassCard delay={0.1} className="p-8">
            <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-5">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}35`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: "var(--c-text-subtle)" }}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[15px] font-medium text-slate-200 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[15px] font-medium text-slate-200">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          {/* Socials */}
          <GlassCard delay={0.2} className="p-8">
            <h3 className="text-lg font-bold text-white mb-6">Social Profiles</h3>
            <div className="space-y-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  style={{
                    background: `${social.color}08`,
                    border: `1px solid ${social.color}15`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${social.color}15`;
                    e.currentTarget.style.borderColor = `${social.color}35`;
                    e.currentTarget.style.boxShadow = `0 0 16px ${social.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${social.color}08`;
                    e.currentTarget.style.borderColor = `${social.color}15`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm"
                    style={{
                      background: `${social.color}18`,
                      border: `1px solid ${social.color}35`,
                      color: social.color,
                    }}
                  >
                    {social.icon}
                  </div>
                  <span className="font-semibold text-base text-slate-300 group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                  <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors text-xs">↗</span>
                </motion.a>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
