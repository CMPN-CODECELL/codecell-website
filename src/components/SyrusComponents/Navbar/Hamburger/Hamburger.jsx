import React from "react";
import styles from "./Hamburger.module.css";

const Hamburger = ({ isOpen, toggle, line1Ref, line2Ref }) => {
  return (
    <button
      className={styles.hamburger}
      onClick={toggle}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span ref={line1Ref} className={styles.line}></span>
      <span ref={line2Ref} className={styles.line}></span>
    </button>
  );
};

export default Hamburger;
