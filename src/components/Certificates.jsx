import { useState, useEffect } from "react";
import ctfCert from "../assets/foto/serJuara3.png";
import gsaCert from "../assets/foto/serGSA.png";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  // lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeCert ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [activeCert]);

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className="py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== TITLE ===== */}
        <h2
          id="certificates-title"
          className="section-title text-2xl sm:text-3xl mb-4 tracking-tight text-center"
        >
          Achievements & Certificates
        </h2>

        <p className="text-slate-400 theme-light:text-slate-600 max-w-xl mx-auto text-center mb-16 text-sm sm:text-base leading-relaxed">
          Verified achievements and recognitions highlighting my journey
          in cybersecurity, leadership, and technology communities.
        </p>

        {/* ===== CERT GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CertificateCard
            image={ctfCert}
            alt="CTF Kaliber – 3rd Place"
            title="3rd Place – Capture The Flag (CTF)"
            desc="Awarded by LSO Kaliber UMM for achieving 3rd place in a cybersecurity Capture The Flag competition."
            tags={[
              "Web Exploitation",
              "Cryptography",
              "OSINT",
              "Cybersecurity",
            ]}
            onClick={() => setActiveCert(ctfCert)}
          />

          <CertificateCard
            image={gsaCert}
            alt="Google Student Ambassador"
            title="Google Student Ambassador – Class of 2025"
            desc="Selected as a Google Student Ambassador for leadership, community contribution, and advocacy of Google technologies."
            tags={[
              "Leadership",
              "Community",
              "Google AI",
              "Technology Advocacy",
            ]}
            onClick={() => setActiveCert(gsaCert)}
          />
        </div>
      </div>

      {/* ===== MODAL / LIGHTBOX ===== */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          className="
            fixed inset-0 z-50
            bg-black/80 backdrop-blur-md
            flex items-center justify-center
            p-6
          "
        >
          <img
            src={activeCert}
            alt="Certificate Preview"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setActiveCert(null)}
            aria-label="Close preview"
            className="
              absolute top-6 right-6
              text-white text-3xl
              hover:opacity-70
              transition-opacity
            "
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

/* ===== CERTIFICATE CARD ===== */
function CertificateCard({ image, alt, title, desc, tags, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group
        cursor-pointer
        p-5 rounded-xl

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
      {/* IMAGE */}
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={alt}
          className="
            w-full object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* TITLE */}
      <h3
        className="
          text-slate-100 theme-light:text-slate-900
          font-semibold mb-2
          group-hover:text-cyan-400
          transition-colors
        "
      >
        {title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-slate-400 theme-light:text-slate-600 leading-relaxed mb-3">
        {desc}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="
              text-xs font-medium
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