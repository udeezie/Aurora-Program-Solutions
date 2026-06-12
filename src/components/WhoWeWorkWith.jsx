import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";
import "./WhoWeWorkWith.scss";

const audiences = [
  "Indigenous Communities",
  "Tribal Councils",
  "Environmental Organizations",
  "Non-Profit Organizations",
];

export default function WhoWeWorkWith() {
  return (
    <section id="who" className="who">
      <div className="wrap">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <h2>
            Who we <em>work with.</em>
          </h2>
          <p>
            Practical program support for the communities and organizations carrying environmental
            work forward.
          </p>
        </motion.div>

        <motion.div
          className="who-grid"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {audiences.map((a) => (
            <motion.div className="who-card" variants={fadeUp} key={a}>
              <span>{a}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
