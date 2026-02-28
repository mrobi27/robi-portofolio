import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Python", icon: FaPython, color: "#3776ab" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Git", icon: FaGitAlt, color: "#f05032" },
  { name: "GitHub", icon: FaGithub, color: "github" },
  { name: "Linux", icon: FaLinux, color: "#fcc624" },
  { name: "Figma", icon: FaFigma, color: "#a259ff" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="py-24 sm:py-32 animate-fade-up"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* ===== TITLE ===== */}
        <h2 className="section-title text-2xl sm:text-3xl mb-4">
          Tech Stack
        </h2>

        <p className="text-slate-400 theme-light:text-slate-600 max-w-xl mx-auto mb-16 text-sm sm:text-base leading-relaxed">
          Technologies and tools I use across system, security, and frontend
          development.
        </p>

        {/* ===== MARQUEE ===== */}
        <div className="relative mb-24 overflow-hidden pt-8">
          <div className="tech-marquee gap-16 px-6">
            {[...skills, ...skills].map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* ICON */}
                  <Icon
                    className="text-5xl"
                    style={{
                      color: skill.color,
                      filter: "drop-shadow(0 0 14px rgba(99,102,241,0.35))",
                    }}
                  />

                  {/* NAME (NEON GRADIENT) */}
                  <span
                    className="
                      mt-3 text-sm font-semibold
                      bg-gradient-to-r from-cyan-400 to-purple-400
                      theme-light:from-cyan-600 theme-light:to-purple-600
                      bg-clip-text text-transparent
                      transition-all duration-300
                      group-hover:from-purple-400 group-hover:to-cyan-400
                    "
                    style={{
                      textShadow: "0 0 12px rgba(139,92,246,0.35)",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== SKILL CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <SkillCard
            title="Network & System"
            desc="Linux-based systems, networking fundamentals, and system exploration."
          />
          <SkillCard
            title="Cybersecurity"
            desc="Red team mindset, security testing, and offensive exploration."
          />
          <SkillCard
            title="Frontend Development"
            desc="Building interfaces using React, Tailwind, and modern JavaScript."
          />
          <SkillCard
            title="UI / UX Design"
            desc="Designing clean, usable interfaces with Figma and design systems."
          />
        </div>
      </div>
    </section>
  );
}

/* ===== SKILL CARD ===== */
function SkillCard({ title, desc }) {
  return (
    <div
      className="
        group
        p-6 rounded-xl

        border border-white/10
        theme-light:border-slate-200

        bg-white/[0.04]
        theme-light:bg-white

        shadow-xl
        theme-light:shadow-md
        theme-light:shadow-slate-200/70

        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        theme-light:hover:shadow-slate-300/80
      "
    >
      <h3
        className="
          font-semibold mb-2
          text-slate-100 theme-light:text-slate-900
          group-hover:text-cyan-400
          transition-colors
        "
      >
        {title}
      </h3>

      <p className="text-sm text-slate-400 theme-light:text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}