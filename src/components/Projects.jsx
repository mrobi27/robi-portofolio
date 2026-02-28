import { FaGithub, FaFigma, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Sentinel Web Exploitation Lab",
    category: "security",
    desc: "Frontend-based exploitation challenge focused on observation, source code analysis, and security awareness.",
    tech: ["React", "JavaScript", "Web Exploitation", "CTF"],
    github: "https://github.com/mrobi27/web-exploitation-lab",
    live: "https://web-exploitation-lab.vercel.app",
    figma: "",
  },
  {
    title: "Kaliber CTF 2025 – Challenge Development",
    category: "security",
    desc: "Internal CTF challenge repository focusing on offensive security and challenge design.",
    tech: ["Cybersecurity", "Red Team", "CTF", "Collaboration"],
    github: "https://github.com/mrobi27/cyberkaliber2025",
    live: "",
    figma: "",
  },
  {
    title: "CFG-Based Java Syntax Parser",
    category: "academic",
    desc: "Context Free Grammar (CFG) parser for analyzing and validating Java language syntax.",
    tech: ["Python", "Formal Language", "CFG", "System Analysis"],
    github: "https://github.com/mrobi27/REGEX-Bahasa-Jawa-TBO",
    live: "",
    figma: "",
  },
  {
    title: "Advanced Java Programming",
    category: "academic",
    desc: "Academic repository covering advanced Java programming concepts and structured practice modules.",
    tech: ["Java", "OOP", "Academic Project"],
    github: "https://github.com/mrobi27/Pemrograman-Lanjut",
    live: "",
    figma: "",
  },
  {
    title: "IMK Lab Project – UI/UX Design",
    category: "design",
    desc: "Mobile UI/UX design project emphasizing usability, interaction flow, and visual consistency.",
    tech: ["Figma", "UI/UX", "Mobile Design"],
    github: "",
    live: "",
    figma: "https://www.figma.com/design/GnGMYeOTPOaNmC5lWyQhbY/IMK-LAB-PROJECT",
  },
  {
    title: "Network & System Lab (Cisco NetAcad)",
    category: "system",
    desc: "Hands-on networking and system labs covering routing, switching, subnetting, and Linux operations.",
    tech: ["Cisco NetAcad", "Networking", "Linux", "System Admin"],
    github: "",
    live: "https://www.netacad.com/",
    figma: "",
  },
];

const categoryStyle = {
  security: {
    border: "border-red-500/40",
    badge: "bg-red-500/10 text-red-400",
  },
  system: {
    border: "border-cyan-500/40",
    badge: "bg-cyan-500/10 text-cyan-400",
  },
  design: {
    border: "border-purple-500/40",
    badge: "bg-purple-500/10 text-purple-400",
  },
  academic: {
    border: "border-emerald-500/40",
    badge: "bg-emerald-500/10 text-emerald-400",
  },
};

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== TITLE ===== */}
        <h2
          id="projects-title"
          className="section-title text-2xl sm:text-3xl mb-4 tracking-tight text-center"
        >
          Projects
        </h2>

        <p className="text-slate-400 theme-light:text-slate-600 text-sm sm:text-base max-w-xl mx-auto text-center mb-16 leading-relaxed">
          Selected projects demonstrating practical implementation, system
          exploration, and security-oriented problem solving.
        </p>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const style = categoryStyle[p.category];

            return (
              <div
                key={i}
                className={`
                  group
                  p-6 rounded-xl
                  flex flex-col justify-between

                  border-t-2 ${style.border}
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
                `}
              >
                {/* ===== CONTENT ===== */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-slate-100 theme-light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm text-slate-400 theme-light:text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* TECH BADGES */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className={`
                          text-xs font-medium px-2 py-1 rounded-full
                          ${style.badge}
                          theme-light:bg-opacity-10
                        `}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ===== LINKS ===== */}
                <div className="flex gap-4 mt-6 text-slate-400 theme-light:text-slate-700">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="hover:text-white theme-light:hover:text-slate-900 transition-colors"
                    >
                      <FaGithub />
                    </a>
                  )}

                  {p.figma && (
                    <a
                      href={p.figma}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Figma Design"
                      className="hover:text-white theme-light:hover:text-slate-900 transition-colors"
                    >
                      <FaFigma />
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="hover:text-white theme-light:hover:text-slate-900 transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}