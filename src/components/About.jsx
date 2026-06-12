import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";
import "./About.scss";

const credentials = [
  "Managing over $1M annually in environmental programming",
  "14+ active funding agreements",
  "Guardian Program coordination and support",
  "Indigenous-led environmental monitoring",
  "Regulatory and funding compliance",
  "Working with Indigenous governments, Elders, researchers, and regulatory agencies",
];

function Contours() {
  return (
    <svg className="contours" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${-80 + i * 30},700 C ${100 + i * 40},${520 - i * 50} ${260 - i * 20},${420 - i * 38} ${430 + i * 26},${300 - i * 30} S ${640 + i * 20},${80 - i * 16} ${700 + i * 30},${-40 - i * 10}`}
          fill="none"
          stroke="rgba(234,230,218,0.07)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function FallbackArt() {
  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 240 C80 140, 110 90, 150 60 C190 90, 220 140, 270 240" fill="none" stroke="#84c98e" strokeWidth="1.4" opacity="0.8" />
      <path d="M70 240 C105 165, 125 125, 150 105 C175 125, 195 165, 230 240" fill="none" stroke="#d99a4e" strokeWidth="1.1" opacity="0.55" />
      <path d="M105 240 C125 190, 138 165, 150 152 C162 165, 175 190, 195 240" fill="none" stroke="#c97a52" strokeWidth="1" opacity="0.4" />
      <line x1="20" y1="240" x2="280" y2="240" stroke="rgba(234,230,218,0.25)" strokeWidth="1" />
    </svg>
  );
}

export default function About() {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <section id="about">
      <Contours />
      <div className="wrap">
        <div className="about-grid">
          <motion.div variants={stagger(0.09)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.div variants={fadeUp}>
              <div className="section-head">
                <h2>
                  Grounded in real program <em>delivery</em> experience.
                </h2>
              </div>
            </motion.div>

            <ul className="exp-list">
              {credentials.map((item) => (
                <motion.li variants={fadeUp} key={item}>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div className="about-foot" variants={fadeUp}>
              <div className="foot-item">
                <span className="f-label">Availability</span>
                <span className="f-value">Project work, short engagements, and ongoing coordination</span>
              </div>
              <div className="foot-item">
                <span className="f-label">Phone</span>
                <a className="f-value f-phone" href="tel:+16476733174">+1 647-673-3174</a>
              </div>
            </motion.div>
          </motion.div>

          <motion.aside
            className="founder-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className={`founder-art ${hasPhoto ? "has-photo" : ""}`}>
              {hasPhoto ? (
                <img src="/claudia.png" alt="Claudia Azigwe" onError={() => setHasPhoto(false)} />
              ) : (
                <FallbackArt />
              )}
            </div>
            <div className="founder-meta">
              <h3>Claudia Azigwe</h3>
              <span className="f-cred">M.Eng. Environmental Engineering</span>
              <span className="f-cred">Environmental Professional</span>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
