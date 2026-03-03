import { useState, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./SyrusScrollToTop.module.css";

function SyrusScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sponsorSection = document.getElementById("sponsors");
    if (!sponsorSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    observer.observe(sponsorSection);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    // Find the Hero section's ScrollTrigger and scroll to its end position
    // (the last frame where the title card with buttons is fully visible)
    const heroST = ScrollTrigger.getAll().find(
      (st) => st.trigger && st.pin,
    );
    const target = heroST ? heroST.end : 0;

    window.scrollTo(0, target);
  };

  return (
    <button
      className={`${styles.button} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <span className={styles.arrow}>▲</span>
    </button>
  );
}

export default SyrusScrollToTop;
