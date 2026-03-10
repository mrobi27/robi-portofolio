import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-24 sm:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* ===== TITLE ===== */}
        <div className="mb-16">

          <h2
            id="contact-title"
            className="
              text-4xl sm:text-5xl font-bold
              bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500
              bg-clip-text text-transparent
              tracking-tight
              drop-shadow-[0_0_14px_rgba(56,189,248,0.35)]
            "
          >
            Contact
          </h2>

          <p className="text-slate-400 theme-light:text-slate-600 max-w-xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Interested in collaboration, projects, or discussions around
            technology and cybersecurity? Feel free to reach out.
          </p>

        </div>

        {/* ===== CONTACT CARD ===== */}
        <div
          className="
            p-8 sm:p-10
            rounded-2xl

            border border-white/10
            theme-light:border-slate-200

            bg-white/[0.04]
            theme-light:bg-white

            shadow-xl
            theme-light:shadow-md
            theme-light:shadow-slate-200/70

            backdrop-blur-md
            transition-all duration-300
          "
        >

          {/* ===== NAME ===== */}
          <h3 className="text-xl font-semibold text-slate-100 theme-light:text-slate-900 mb-1">
            Muhamad Robi Ardita
          </h3>

          <p className="text-sm text-slate-400 theme-light:text-slate-600 mb-10">
            Informatics Student • Cybersecurity & Frontend Enthusiast
          </p>

          {/* ===== CONTACT LINKS ===== */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">

            <ContactItem
              href="mailto:robyardita5@gmail.com"
              text="robyardita5@gmail.com"
              icon={<FaEnvelope />}
            />

            <ContactItem
              href="https://github.com/mrobi27"
              text="github.com/mrobi27"
              icon={<FaGithub />}
              external
            />

            <ContactItem
              href="https://www.linkedin.com/in/muhamad-robi-ardita-2b1076328/"
              text="LinkedIn Profile"
              icon={<FaLinkedin />}
              external
            />

          </div>

          {/* ===== FOOTER ===== */}
          <p className="text-xs text-slate-500 theme-light:text-slate-500">
            © {new Date().getFullYear()} Muhamad Robi Ardita — Built with React & Tailwind
          </p>

        </div>
      </div>
    </section>
  );
}


/* ===== CONTACT ITEM ===== */

function ContactItem({ href, icon, text, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group
        flex items-center gap-3
        px-5 py-3
        rounded-full

        border border-white/10
        theme-light:border-slate-200

        bg-white/[0.02]
        theme-light:bg-white

        text-slate-300
        theme-light:text-slate-700

        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:text-cyan-400
        theme-light:hover:text-cyan-600
      "
    >

      {/* ICON */}
      <span
        className="
          text-lg
          transition-transform duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </span>

      {/* TEXT */}
      <span className="text-sm sm:text-base break-all sm:break-normal">
        {text}
      </span>

    </a>
  );
}