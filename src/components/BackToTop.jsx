import { useEffect, useState } from "react";
import "./BackToTop.scss";

const R = 21;
const CIRC = 2 * Math.PI * R;

export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(p);
      setVisible(p > 0.08);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#top" className={`back-top ${visible ? "show" : ""}`} aria-label="Back to top">
      <svg className="ring" viewBox="0 0 48 48">
        <circle className="track" cx="24" cy="24" r={R} />
        <circle
          className="progress"
          cx="24"
          cy="24"
          r={R}
          style={{ strokeDasharray: CIRC, strokeDashoffset: CIRC * (1 - progress) }}
        />
      </svg>
      <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </a>
  );
}
