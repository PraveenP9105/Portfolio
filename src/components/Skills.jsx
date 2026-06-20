import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import SkillChip from "./ui/SkillChip";
import GlassCard from "./ui/GlassCard";

const skillCategories = [
  {
    name: "Programming Languages",
    icon: "⌁",
    color: "#38BDF8",
    glow: "cyan",
    skills: ["Java", "Python", "C"],
  },
  {
    name: "Web & Backend Technologies",
    icon: "◈",
    color: "#34D399",
    glow: "green",
    skills: ["Django", "React.js", "Springboot", "SQL"],
  },
  {
    name: "Data & Analytics Tools",
    icon: "▣",
    color: "#F59E0B",
    glow: "amber",
    skills: ["Power BI", "Jupyter Notebook"],
  },
  {
    name: "Design & Productivity Tools",
    icon: "◉",
    color: "#22D3EE",
    glow: "blue",
    skills: ["Figma", "Canva", "VS Code", "Grammarly", "QuillBot"],
  },
  {
    name: "Core Competencies",
    icon: "★",
    color: "#818CF8",
    glow: "violet",
    skills: [
      "Logical Thinking",
      "Problem Solving",
      "Backend Development",
      "Data Analysis",
      "UI/UX Designing",
      "Content Creation",
    ],
  },
];

const chipVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          category="◈ EXPERTISE"
          title="Skills"
          gradient="cyan"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-5">
          {skillCategories.map((category, ci) => (
            /* Wrap each category in a GlassCard so it gets shadow in both modes */
            <GlassCard
              key={category.name}
              glow={category.glow}
              delay={ci * 0.08}
              className="p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                  style={{
                    background: `${category.color}18`,
                    border: `1px solid ${category.color}35`,
                    color: category.color,
                  }}
                >
                  {category.icon}
                </div>
                <h3
                  className="font-bold text-sm tracking-wide uppercase"
                  style={{ color: category.color }}
                >
                  {category.name}
                </h3>
                <div
                  className="flex-1 h-px opacity-30"
                  style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
                />
              </div>

              {/* Chips */}
              <motion.div
                className="flex flex-wrap gap-3"
                variants={chipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, si) => (
                  <SkillChip
                    key={skill}
                    label={skill}
                    color={category.color}
                    delay={si * 0.05}
                  />
                ))}
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
