import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";
import "./Challenges.scss";

const challenges = [
  {
    title: "Overlapping reporting requirements",
    body: "Multiple funding agreements, each with its own deadlines, templates, and obligations.",
  },
  {
    title: "Limited coordination capacity",
    body: "Small teams stretched across administration, fieldwork, and community engagement.",
  },
  {
    title: "Deliverables that are hard to track",
    body: "Deadlines and commitments scattered across emails, files, and memory.",
  },
  {
    title: "Reporting backlogs",
    body: "Inconsistent documentation that builds risk into every funding relationship.",
  },
  {
    title: "Scattered program information",
    body: "Critical knowledge spread across multiple files, systems, and inboxes.",
  },
  {
    title: "Knowledge held by too few",
    body: "Organizational continuity at risk when it lives with a small number of staff.",
  },
];

export default function Challenges() {
  return (
    <section className="challenge" id="challenges">
      <div className="wrap">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="section-head">
            <h2>
              Common challenges <em>we help address.</em>
            </h2>
            <p>
              Communities are often managing multiple environmental initiatives, Guardian programs,
              funding agreements, and partner relationships at once, frequently with limited staff
              capacity. Common challenges include:
            </p>
          </div>
        </motion.div>

        <motion.div
          className="challenge-grid"
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {challenges.map((c) => (
            <motion.div className="challenge-card" variants={fadeUp} key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
