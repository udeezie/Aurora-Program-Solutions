import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion.js";
import "./VideoSection.scss";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  const play = () => {
    setReady(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <section className="video-section" id="video">
      <div className="wrap">
        <motion.div
          className="video-shell"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="video-caption">
            <span>A personal introduction</span>
          </div>
          <div className="video-frame">
            <video
              ref={videoRef}
              controls
              preload="metadata"
              style={{ display: ready ? "block" : "none" }}
              onLoadedMetadata={() => setReady(true)}
            >
              <source src="/assets/intro.mp4" type="video/mp4" />
            </video>
            {!ready && (
              <div className="video-placeholder">
                <button className="play-btn" aria-label="Play introduction video" onClick={play}>
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </button>
                <span>Meet Aurora Program Solutions</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
