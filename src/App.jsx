import { useEffect } from "react";
import Lenis from "lenis";
import Loader from "./components/Loader.jsx";
import BackToTop from "./components/BackToTop.jsx";
import AuroraBackground from "./components/AuroraBackground.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import VideoSection from "./components/VideoSection.jsx";
import Challenges from "./components/Challenges.jsx";
import Services from "./components/Services.jsx";
import CtaBand from "./components/CtaBand.jsx";
import WhoWeWorkWith from "./components/WhoWeWorkWith.jsx";
import Results from "./components/Results.jsx";
import About from "./components/About.jsx";
import QuoteBand from "./components/QuoteBand.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -70 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Loader />
      <AuroraBackground />
      <Nav />
      <main id="top">
        <Hero />
        <VideoSection />
        <Challenges />
        <Services />
        <CtaBand
          text="Need support with reporting, coordination, or program implementation?"
          label="Contact APS"
        />
        <WhoWeWorkWith />
        <Results />
        <About />
        <CtaBand text="Have a program that could use support?" label="Let's discuss your program needs" />
        <QuoteBand />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
