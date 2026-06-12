import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.scss";

const arcs = [
  { d: "M5 34 C12 14 19 6 24 5 C29 6 36 14 43 34", stroke: "#84c98e", w: 1.7 },
  { d: "M11 34 C16 19 21 11 24 10 C27 11 32 19 37 34", stroke: "#d99a4e", w: 1.5 },
  { d: "M16 34 C19 24 22 18 24 17 C26 18 29 24 32 34", stroke: "#c97a52", w: 1.4 },
];

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 850);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-inner">
            <svg className="loader-mark" viewBox="0 0 48 40" fill="none" aria-hidden="true">
              {arcs.map((a, i) => (
                <motion.path
                  key={i}
                  d={a.d}
                  stroke={a.stroke}
                  strokeWidth={a.w}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.08 }}
                />
              ))}
            </svg>
            <motion.div
              className="loader-word"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            >
              Aurora
              <span>Program Solutions</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
