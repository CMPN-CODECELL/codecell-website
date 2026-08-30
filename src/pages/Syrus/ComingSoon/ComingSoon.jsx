import React, { useEffect, useState } from "react";
import codecellLogo from "/codecell-logo.webp";
import syrusLogo from "../../../assets/Syrus-26-logo.webp";
import styles from "./ComingSoon.module.css";

function ComingSoon() {
  const [fontsReady, setFontsReady] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsReady(true);
    });
  }, []);

  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />

      <div
        className={`${styles.content} ${
          fontsReady ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.logoRow}>
          <a href="/">
            <img src={codecellLogo} alt="CodeCell++" className={styles.logo} />
          </a>
          <a href="/syrus">
            <img
              src={syrusLogo}
              alt="Hackathon Logo"
              className={`${styles.logo} ${styles.syrusLogo}`}
            />
          </a>
        </div>

        <div className={styles.mainContent}>
          <h1 className={styles.hackathonTitle}>SyRus Hackathon</h1>
          <h2 className={`${styles.subTitle} ${play ? styles.play : ""}`}>
            <span className={styles.word1}>ONE CITY.</span>
            <span className={styles.word2}>ONE HACK. </span>
            <span className={styles.word3}>TOTAL CHAOS.</span>
          </h2>

          <p className={styles.comingSoon}>COMING SOON</p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
