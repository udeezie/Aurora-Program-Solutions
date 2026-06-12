import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import "./Nav.scss";

const links = [
  { label: "Services", href: "#services" },
  { label: "Who we serve", href: "#who" },
  { label: "Results", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-nav ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <Logo className="brand-mark" />
            <span className="brand-text">
              <span className="brand-word">Aurora</span>
              <span className="brand-sub">Program Solutions</span>
            </span>
          </a>

          <nav className="nav-links">
            {links.slice(0, 4).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={active === l.href.slice(1) ? "active" : ""}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a className="nav-contact" href="#contact">
            Contact ↗
          </a>

          
          <label className="hamburger" aria-label="Toggle menu">
            <input type="checkbox" checked={open} onChange={(e) => setOpen(e.target.checked)} />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </div>
      </header>

      
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="mobile-email" href="mailto:claudia@auroraprogramsolutions.com">
          claudia@auroraprogramsolutions.com
        </a>
      </div>
    </>
  );
}
