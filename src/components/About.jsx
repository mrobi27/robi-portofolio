export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="
        scroll-mt-24 sm:scroll-mt-32
        py-24 sm:py-32
        relative overflow-hidden
        bg-white dark:bg-transparent
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6
          grid md:grid-cols-2
          gap-12 md:gap-20
          items-start
        "
      >
        {/* ===== LEFT : ABOUT TEXT ===== */}
        <div className="animate-fade-up text-center md:text-left">
          <h2
            id="about-title"
            className="
              section-title
              text-2xl sm:text-3xl
              mb-5
              font-semibold
              text-neutral-950 dark:text-neutral-100
            "
          >
            About Me
          </h2>

          {/* PARAGRAPH 1 */}
          <p className="leading-7 mb-4 text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-300">
            I am an Informatics student with a strong interest in modern
            technology, particularly in front-end development UI/UX design, and cybersecurity.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="leading-7 mb-4 text-sm sm:text-base text-neutral-900 dark:text-neutral-300">
            I enjoy crafting clean and intuitive interfaces, transforming
            design concepts into responsive and user-friendly web applications.
            Alongside front-end development, I actively explore cybersecurity
            fundamentals and participate in CTF challenges to sharpen my
            analytical thinking and problem-solving skills.
          </p>

          {/* PARAGRAPH 3 */}
          <p className="leading-7 text-sm sm:text-base text-neutral-900 dark:text-neutral-300">
            Currently, I am continuously improving my skills in modern
            JavaScript frameworks, accessibility-focused design, and secure web
            development practices.
          </p>
        </div>

        {/* ===== RIGHT : SKILL HIGHLIGHTS ===== */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-4 sm:gap-6
            animate-fade-up animate-delay-2
          "
        >
          <SkillCard
            title="Front-End Development"
            desc="Responsive UI & modern web interfaces"
            gradient="from-cyan-500/20 via-transparent to-blue-500/20"
          />

          <SkillCard
            title="UI / UX Design"
            desc="Wireframing, prototyping & visual systems"
            gradient="from-purple-500/20 via-transparent to-cyan-500/20"
          />

          <SkillCard
            title="Cybersecurity"
            desc="CTF challenges & security fundamentals"
            gradient="from-red-500/20 via-transparent to-orange-500/20"
          />

          <SkillCard
            title="Problem Solving"
            desc="Logic, analysis & debugging mindset"
            gradient="from-emerald-500/20 via-transparent to-cyan-500/20"
          />
        </div>
      </div>
    </section>
  );
}

/* ===== REUSABLE SKILL CARD ===== */
function SkillCard({ title, desc, gradient }) {
  return (
    <div
      className="
        group relative
        p-5 sm:p-6
        rounded-xl
        border border-neutral-200 dark:border-white/10
        bg-white dark:bg-white/[0.03]
        backdrop-blur-sm
        shadow-sm dark:shadow-none
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-md dark:hover:shadow-none
      "
    >
      {/* glow aura */}
      <div
        className={`
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-300
          bg-gradient-to-br ${gradient}
          blur-xl
          pointer-events-none
        `}
      />

      <h3 className="relative mb-1 text-sm sm:text-base font-semibold text-neutral-950 dark:text-neutral-200">
        {title}
      </h3>

      <p className="relative text-xs sm:text-sm text-neutral-700 dark:text-neutral-400">
        {desc}
      </p>
    </div>
  );
}