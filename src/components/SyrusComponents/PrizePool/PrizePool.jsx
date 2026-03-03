import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./PrizePool.module.css";
import TiltImage from "../TiltImage/TiltImage";
import MoneyStar from "/GTA/moneyStar.webp";

function PrizePool() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(10000);

  const startValue = 10000;
  const targetValue = 100000;
  const increment = 1000;

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(startValue);
      return;
    }

    let currentValue = startValue;
    const pauseAtValues = [50000, 70000]; // Values to pause at
    const normalDelay = 20; // Normal animation speed
    const pauseDuration = 500; // Pause duration in ms

    const animateValue = () => {
      if (currentValue < targetValue) {
        currentValue += increment;
        setDisplayValue(currentValue);

        // Check if we should pause at this value
        if (pauseAtValues.includes(currentValue)) {
          setTimeout(animateValue, pauseDuration);
        } else {
          setTimeout(animateValue, normalDelay);
        }
      } else {
        setDisplayValue(targetValue);
      }
    };

    animateValue();
  }, [isInView]);

  // Format number with Indian comma style (e.g., 1,50,000)
  const formatWithCommas = (num) => {
    return num.toLocaleString("en-IN");
  };

  return (
    <section id="prizepool" ref={sectionRef} className={styles.prizeSection}>
      <TiltImage
        src="/GTA/Prizepool_Plate.webp"
        alt="Prize Pool"
        className={styles.tiltPlate}
        galleryRef={sectionRef}
      />
      <div className={styles.container}>
        <div className={styles.amountWrapper}>
          <div className={styles.amount}>
            <span className={styles.currency}>₹</span>
            <span>{formatWithCommas(displayValue)}</span>
          </div>
          <p className={styles.tagline}>TOTAL WORTH OF PRIZES</p>
          <p className={styles.perksLine}>INTERNSHIPS • SWAGS • GOODIES</p>
        </div>
      </div>
      <img
        src={MoneyStar}
        alt=""
        aria-hidden="true"
        className={styles.moneyStarArt}
      />
    </section>
  );
}

export default PrizePool;
