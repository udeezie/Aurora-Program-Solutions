import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion.js";
import "./Services.scss";

const services = [
  {
    tag: "Coordination",
    title: "Program Coordination & Implementation",
    desc: "Keeping environmental and Guardian programs organized, aligned, and moving forward.",
    items: [
      "Coordinating workplans, deliverables, and program timelines",
      "Tracking funding agreement deliverables, reporting deadlines, meetings, and milestones",
      "Supporting Guardian and land-based programs in the field and on paper",
      "Running meeting logistics and following up on action items",
      "Keeping partners, funders, and staff aligned and informed",
    ],
  },
  {
    tag: "Reporting",
    title: "Reporting & Accountability",
    desc: "Staying ahead of reporting requirements and funding commitments.",
    items: [
      "Preparing contribution agreement and funder reports",
      "Monitoring deliverables and commitments across every agreement",
      "Building reporting calendars so no deadline is missed",
      "Drafting progress summaries and briefing materials for leadership",
      "Organizing documentation and records into audit-ready files",
    ],
  },
  {
    tag: "Systems",
    title: "Systems & Organizational Support",
    desc: "Practical systems that improve consistency and reduce administrative burden.",
    items: [
      "Setting up clear file and document organization",
      "Improving everyday program workflows and processes",
      "Building reusable tracking tools, templates, and trackers",
      "Capturing knowledge so continuity survives staff turnover",
      "Standing up practical program administration systems",
    ],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="section-head">
            <h2>
              How APS <em>supports</em> your team.
            </h2>
          </div>
        </motion.div>

        <div className="service-stack">
          {services.map((s, i) => (
            <div className="service-panel" style={{ top: 92 + i * 14 }} key={s.tag}>
              <div className="panel-head">
                <span className="panel-tag">{s.tag}</span>
                <span className="panel-rule" />
              </div>
              <div className="panel-body">
                <div className="panel-left">
                  <h3>{s.title}</h3>
                  <p className="panel-desc">{s.desc}</p>
                </div>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
