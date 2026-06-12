import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion.js";
import "./Contact.scss";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [serverError, setServerError] = useState("");

  const validate = (form) => {
    const next = {};
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2) next.name = "Please enter your name.";
    if (!email) next.email = "An email is required so we can reply.";
    else if (!EMAIL_RE.test(email)) next.email = "That email doesn't look right.";
    if (message.length < 10) next.message = "A little more detail helps (10+ characters).";

    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    setServerError("");
    setStatus("sending");

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      organization: form.organization.value.trim(),
      interest: form.interest.value,
      message: form.message.value.trim(),
      company: form.company.value, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setServerError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please check your connection and try again.");
    }
  };

  const clearError = (field) =>
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const { [field]: _, ...rest } = prev;
      return rest;
    });

  const resetForm = () => {
    setErrors({});
    setServerError("");
    setStatus("idle");
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <div className="contact-grid">
            <motion.div className="contact-left" variants={fadeUp}>
              <h2>
                Let's talk about
                <br />
                <em>your program.</em>
              </h2>
              <p>
                Managing a reporting backlog, launching a Guardian program, or just short on
                coordination capacity? Reach out for a relaxed, no pressure conversation.
              </p>
              <a className="contact-line" href="mailto:claudia@auroraprogramsolutions.com">
                claudia@auroraprogramsolutions.com
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
              <a className="contact-line" href="tel:+16476733174">
                +1 647-673-3174
                <svg className="ico-fill" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64 0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.1 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </a>
              <div className="contact-meta">
                <span>Typical response within 1 to 2 business days</span>
              </div>
            </motion.div>

            <div className="form-shell">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    className="form-success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    role="status"
                  >
                    <motion.svg
                      className="success-check"
                      viewBox="0 0 52 52"
                      fill="none"
                      aria-hidden="true"
                    >
                      <motion.circle
                        cx="26"
                        cy="26"
                        r="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M16 27l7 7 13-14"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.45 }}
                      />
                    </motion.svg>
                    <h3>Message received</h3>
                    <p>
                      Thank you for reaching out. Your inquiry is on its way to our team, and we'll
                      be in touch within 1 to 2 business days.
                    </p>
                    <button type="button" className="success-again" onClick={resetForm}>
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    variants={fadeUp}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12, transition: { duration: 0.3 } }}
                    noValidate
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      name="company"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

              <div className="field-row">
                <div className={`field ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="f-name">Name</label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    onInput={() => clearError("name")}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="f-org">Organization</label>
                  <input id="f-org" name="organization" type="text" placeholder="Community or organization" />
                </div>
              </div>

              <div className="field-row">
                <div className={`field ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="f-email">Email</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    onInput={() => clearError("email")}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="f-interest">Area of interest</label>
                  <select id="f-interest" name="interest" defaultValue="Program Coordination & Implementation">
                    <option>Program Coordination &amp; Implementation</option>
                    <option>Reporting &amp; Accountability Support</option>
                    <option>Systems &amp; Organizational Support</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className={`field ${errors.message ? "has-error" : ""}`}>
                <label htmlFor="f-msg">Message</label>
                <textarea
                  id="f-msg"
                  name="message"
                  rows={4}
                  placeholder="Tell us a little about your program and the support you're looking for…"
                  aria-invalid={!!errors.message}
                  onInput={() => clearError("message")}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button className="btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send inquiry"}
                {status !== "sending" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                )}
              </button>

              {status === "error" && (
                <p className="form-note form-note--err" role="alert">
                  {serverError}
                </p>
              )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
