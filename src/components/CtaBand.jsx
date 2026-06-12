import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion.js";
import "./CtaBand.scss";

export default function CtaBand({ text, label, href = "#contact" }) {
  return (
    <div className="cta-band">
      <motion.div
        className="wrap cta-inner"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <p>{text}</p>
        <a className="btn" href={href}>
          {label}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
