import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion.js";
import "./QuoteBand.scss";

export default function QuoteBand() {
  return (
    <section className="quote-band">
      <div className="wrap">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <blockquote>
            Practical systems. Stronger coordination.
            <br />
            <em>Capacity that lasts.</em>
          </blockquote>
          <span className="q-attr">The APS approach</span>
        </motion.div>
      </div>
    </section>
  );
}
