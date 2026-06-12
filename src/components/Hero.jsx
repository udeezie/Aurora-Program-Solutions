import { motion } from "framer-motion";
import { EASE } from "../lib/motion.js";
import "./Hero.scss";

const lineReveal = {
  hidden: { y: "112%" },
  show: (d) => ({
    y: 0,
    transition: { duration: 1.1, ease: EASE, delay: d },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: d },
  }),
};

const stars = Array.from({ length: 60 }, (_, i) => ({
  x: ((i * 97) % 1000) / 10,
  y: ((i * 57) % 720) / 10,
  s: 0.6 + (((i * 13) % 10) / 10) * 1.7,
  o: 0.25 + ((i * 7) % 7) / 10,
}));

function Spruce({ x, s = 1 }) {
  return (
    <g transform={`translate(${x} 240) scale(${s})`} fill="#070a0c">
      <rect x="-2" y="-10" width="4" height="10" />
      <polygon points="-16,-6 16,-6 0,-34" />
      <polygon points="-12,-24 12,-24 0,-48" />
      <polygon points="-9,-40 9,-40 0,-62" />
      <polygon points="-6,-54 6,-54 0,-74" />
    </g>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-scene" aria-hidden="true">
        <div className="sky-glow" />
        <svg
          className="hero-stars"
          viewBox="0 0 1000 720"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="tw-a">
            {stars.filter((_, i) => i % 2 === 0).map((st, i) => (
              <circle key={i} cx={st.x * 10} cy={st.y * 10} r={st.s} fill="#dce9ff" opacity={st.o} />
            ))}
          </g>
          <g className="tw-b">
            {stars.filter((_, i) => i % 2 === 1).map((st, i) => (
              <circle key={i} cx={st.x * 10} cy={st.y * 10} r={st.s} fill="#dce9ff" opacity={st.o} />
            ))}
          </g>
        </svg>
        <div className="aurora-wrap">
          <svg
            className="aurora-svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
          <defs>
            <linearGradient id="auroraGrad" x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4cf4e2" />
              <stop offset="0.4" stopColor="#66f7a6" />
              <stop offset="0.68" stopColor="#9bff72" />
              <stop offset="0.88" stopColor="#ecff70" />
              <stop offset="1" stopColor="#faffa4" />
            </linearGradient>
            <filter id="auroraBlur" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="36" />
            </filter>
            <filter id="auroraCore" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="30" />
            </filter>
            <radialGradient id="auroraHot" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#f2ffc0" stopOpacity="0.85" />
              <stop offset="1" stopColor="#f2ffc0" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g className="aurora-group">
            <path
              d="M-140 372 C 250 308, 610 308, 845 396 C 1045 474, 1112 592, 1035 748 C 990 845, 905 892, 872 1010"
              fill="none"
              stroke="url(#auroraGrad)"
              strokeWidth="124"
              strokeLinecap="round"
              filter="url(#auroraBlur)"
              opacity="0.82"
            />
            <path
              d="M-140 372 C 250 308, 610 308, 845 396 C 1045 474, 1112 592, 1035 748 C 990 845, 905 892, 872 1010"
              fill="none"
              stroke="#e6ffd2"
              strokeWidth="30"
              strokeLinecap="round"
              filter="url(#auroraCore)"
              opacity="0.58"
            />
            <ellipse cx="912" cy="800" rx="320" ry="150" fill="url(#auroraHot)" filter="url(#auroraBlur)" />
          </g>
          </svg>
        </div>
        <svg
          className="terrain"
          viewBox="0 0 1440 240"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,240 L0,170 Q160,148 340,160 T720,150 T1100,162 T1440,148 L1440,240 Z"
            fill="#0a1018"
          />
          <Spruce x={70} s={0.9} />
          <Spruce x={120} s={1.2} />
          <Spruce x={158} s={0.7} />
          <Spruce x={420} s={0.8} />
          <Spruce x={465} s={1.1} />
          <Spruce x={880} s={0.75} />
          <Spruce x={1240} s={1.15} />
          <Spruce x={1295} s={0.85} />
          <Spruce x={1340} s={1.0} />
          <path
            d="M0,240 L0,196 Q240,180 480,192 T960,186 T1440,194 L1440,240 Z"
            fill="#0a0806"
          />
        </svg>
        <div className="hero-grain" />
      </div>

      <div className="wrap hero-inner">
        <h1>
          <span className="line-mask">
            <motion.span className="line" variants={lineReveal} custom={0.2} initial="hidden" animate="show">
              Your programs carry
            </motion.span>
          </span>
          <span className="line-mask">
            <motion.span className="line" variants={lineReveal} custom={0.32} initial="hidden" animate="show">
              community trust.
            </motion.span>
          </span>
          <span className="line-mask">
            <motion.span className="line accent" variants={lineReveal} custom={0.44} initial="hidden" animate="show">
              We carry the paperwork.
            </motion.span>
          </span>
        </h1>

        <div className="hero-row">
          <motion.p className="hero-sub" variants={fade} custom={0.8} initial="hidden" animate="show">
            Environmental program coordination, reporting, and systems support for Indigenous
            communities, Tribal Councils, environmental organizations, and community-focused
            initiatives across Canada.
          </motion.p>

          <motion.div className="hero-ctas" variants={fade} custom={0.95} initial="hidden" animate="show">
            <a className="btn" href="#contact">
              Start a conversation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
            <a className="link-arrow" href="#services">
              Explore services ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
