import React, { useState, useEffect } from "react";
import { FaCaretUp } from "react-icons/fa";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./ScrollToTop.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Find the hero's pinned ScrollTrigger (first one with a pin)
    const heroTrigger = ScrollTrigger.getAll().find((st) => st.pin);
    const target = heroTrigger ? heroTrigger.end : 0;

    // Animate scroll manually to work alongside Lenis
    const start = window.scrollY;
    const distance = target - start;
    const duration = 1200; // ms
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaCaretUp />
    </button>
  );
}

export default ScrollToTopButton;
