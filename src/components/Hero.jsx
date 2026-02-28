import { useRef, useState, useEffect } from "react";
import foto from "../assets/foto/Foto 3x4.JPG";

export default function Hero() {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const fullName = "Muhamad Robi Ardita";
  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) {
        clearInterval(typing);
        setTypingDone(true);
      }
    }, 120);
    return () => clearInterval(typing);
  }, []);

  /* =======================
     3D CARD + AURA (SMART)
  ======================= */
  const handleMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const isLight = document.documentElement.classList.contains("theme-light");

    const rotateX = ((y - centerY) / centerY) * (isLight ? 2 : 6);
    const rotateY = ((x - centerX) / centerX) * (isLight ? -2 : -6);
    const scale = isLight ? 1.015 : 1.04;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scale})
    `;

    glow.style.background = isLight
      ? `radial-gradient(
          220px at ${x}px ${y}px,
          rgba(0,0,0,0.08),
          transparent 70%
        )`
      : `radial-gradient(
          300px at ${x}px ${y}px,
          rgba(56,189,248,0.35),
          rgba(168,85,247,0.25),
          transparent 70%
        )`;
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-32">
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="animate-fade-up md:pl-6 text-center md:text-left">
          <span className="block text-xs sm:text-sm tracking-widest text-cyan-500 mb-3">
            INFORMATICS STUDENT
          </span>

          <h1 className="font-bold leading-tight">
            <span
              className="
                inline-block whitespace-nowrap
                animated-gradient
                theme-light:text-slate-900
                theme-light:bg-none
                text-[1.65rem] sm:text-4xl md:text-5xl
                min-w-[18ch] sm:min-w-[22ch]
              "
            >
              {displayText}
              {!typingDone && <span className="typing-cursor">|</span>}
            </span>
          </h1>

          <p className="mt-5 max-w-lg mx-auto md:mx-0 leading-relaxed text-sm sm:text-base text-slate-400 theme-light:text-slate-600">
            An Informatics student with a strong interest in modern technology,
            cybersecurity, and digital system development.
          </p>
        </div>

        {/* PHOTO CARD */}
        <div className="relative flex justify-center animate-fade-up animate-delay-2">
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="relative w-64 h-88 sm:w-72 sm:h-96 rounded-2xl transition-transform duration-200 ease-out"
          >
            {/* AURA */}
            <div
              ref={glowRef}
              className="hero-glow absolute inset-[-18px] rounded-[28px] blur-2xl pointer-events-none"
            />

            {/* IMAGE */}
            <img
              src={foto}
              alt="Muhamad Robi Ardita"
              className="
                relative w-full h-full object-cover rounded-2xl
                bg-[#020617] theme-light:bg-white
                border border-white/10 theme-light:border-slate-200
                shadow-[0_30px_70px_rgba(0,0,0,0.6)]
                theme-light:shadow-[0_18px_36px_rgba(0,0,0,0.18)]
                transition-all duration-300
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}