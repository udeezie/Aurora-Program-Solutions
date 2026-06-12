import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";
import "./Results.scss";

const results = [
  ["Reduced administrative pressure", "on staff and leadership"],
  ["Improved reporting consistency", "and accountability to funders"],
  ["Better visibility", "over commitments and deliverables"],
  ["Stronger organizational systems", "and lasting internal capacity"],
  ["More time for stewardship", "and community priorities"],
];

export default function Results() {
  return (
    <section className="results" id="approach">
      <div className="wrap">
        <div className="results-flex">
          <motion.div
            className="results-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2>
              What your organization <em>gains.</em>
            </h2>
            <p>
              APS is grounded in real-world program delivery. The focus is long-term capacity:
              systems your team owns and carries forward, not dependency on a consultant.
            </p>
          </motion.div>

          <motion.div
            className="results-list"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {results.map(([strong, rest]) => (
              <motion.div className="result-row" variants={fadeUp} key={strong}>
                <span className="arrow">→</span>
                <p>
                  <strong>{strong}</strong> <span>{rest}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
