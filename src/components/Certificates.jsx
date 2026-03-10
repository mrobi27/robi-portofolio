import { useState, useEffect } from "react";
import ctfJuara3 from "../assets/foto/serJuara3.png";
import gsaCert from "../assets/foto/serGSA.png";
import ctfJuara2 from "../assets/foto/Juara2Ctf.png";
import aiKumpul from "../assets/foto/aiKumpul.png";
import D1 from "../assets/foto/D1.png";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeCert ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [activeCert]);

  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2
            className="
              text-4xl sm:text-5xl font-bold
              bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500
              bg-clip-text text-transparent
              tracking-tight
              drop-shadow-[0_0_14px_rgba(56,189,248,0.35)]
            "
          >
            Achievements & Certificates
          </h2>

          <p className="text-slate-400 theme-light:text-slate-600 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            Verified achievements and recognitions highlighting my journey
            in cybersecurity, leadership, and technology communities.
          </p>

        </div>

        {/* ACHIEVEMENTS */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
          <h3 className="text-lg font-semibold tracking-wide text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
            ✦ Achievements ✦
          </h3>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">

          <CertificateCard
            image={ctfJuara2}
            alt="CTF LSO Kaliber Season 2 – Juara 2"
            title="2nd Place – Capture The Flag (CTF) | Season 2"
            desc="Awarded by LSO Kaliber UMM for achieving 2nd place in the CTF Season 2 competition."
            tags={["Web Exploitation","Cryptography","OSINT","Cybersecurity"]}
            onClick={() => setActiveCert(ctfJuara2)}
          />

          <CertificateCard
            image={ctfJuara3}
            alt="CTF LSO Kaliber Season 1 – Juara 3"
            title="3rd Place – Capture The Flag (CTF) | Season 1"
            desc="Awarded by LSO Kaliber UMM for achieving 3rd place in the CTF Season 1 competition."
            tags={["Web Exploitation","Cryptography","OSINT","Cybersecurity"]}
            onClick={() => setActiveCert(ctfJuara3)}
          />

        </div>

        {/* CERTIFICATES */}
        <div className="flex items-center justify-center gap-4 mb-12">        
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
          <h3 className="text-lg font-semibold tracking-wide text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
            ✦ Certificates ✦
          </h3>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <CertificateCard
            image={gsaCert}
            alt="Google Student Ambassador"
            title="Google Student Ambassador – Class of 2025"
            desc="Selected as a Google Student Ambassador for leadership and community contribution."
            tags={["Leadership","Community","Google AI","Technology Advocacy"]}
            onClick={() => setActiveCert(gsaCert)}
          />

          <CertificateCard
            image={aiKumpul}
            alt="AI Ignition Training"
            title="AI Ignition Training – Kumpul.id"
            desc="Completed AI Ignition Training covering AI fundamentals and emerging technologies."
            tags={["Artificial Intelligence","Machine Learning","AI Fundamentals"]}
            onClick={() => setActiveCert(aiKumpul)}
          />

          <CertificateCard
            image={D1}
            alt="Dicoding DevCoach 204 Data Science"
            title="DevCoach 204 – Data Science | Dicoding"
            desc="Participated in Dicoding DevCoach 204 discussing how to start a career as a Data Scientist."
            tags={["Data Science","Machine Learning","Career Development"]}
            onClick={() => setActiveCert(D1)}
          />

        </div>

      </div>

      {/* MODAL */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
        >
          <img
            src={activeCert}
            alt="Certificate Preview"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setActiveCert(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:opacity-70 transition-opacity"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

/* CARD */
function CertificateCard({ image, alt, title, desc, tags, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        w-full max-w-sm
        group cursor-pointer
        p-3 rounded-xl
        border border-white/10
        hover:border-cyan-400/40
        theme-light:border-slate-200
        bg-white/[0.04]
        theme-light:bg-white
        shadow-lg
        theme-light:shadow-md
        theme-light:shadow-slate-200/70
        backdrop-blur-md
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      {/* IMAGE */}
      <div className="overflow-hidden rounded-lg mb-3">
        <img
          src={image}
          alt={alt}
          className="
            w-full
            object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* TITLE */}
      <h3 className="text-sm font-semibold mb-2 text-slate-100 theme-light:text-slate-900 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-xs text-slate-400 theme-light:text-slate-600 leading-relaxed mb-3">
        {desc}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="
              text-[10px] font-medium
              px-2 py-1 rounded-full
              bg-cyan-400/10 text-cyan-400
              theme-light:bg-cyan-600/10 theme-light:text-cyan-600
            "
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}