import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-top">
        <p className="footer-copy">
          © {new Date().getFullYear()} Aurora Program Solutions
          <span>All rights reserved</span>
        </p>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="mailto:claudia@auroraprogramsolutions.com">Email</a>
          <a href="tel:+16476733174">+1 647-673-3174</a>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        Aurora
      </div>
    </footer>
  );
}
