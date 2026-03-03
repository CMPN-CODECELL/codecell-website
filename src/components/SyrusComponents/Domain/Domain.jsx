import { useRef } from "react";
import styles from "./Domain.module.css";
import Gangster from "/GTA/Gangster.webp";
import TiltImage from "../TiltImage/TiltImage";

function Domain() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.section} id="domain">
      <div className={styles.container}>
        <TiltImage
          src="/GTA/Domain_Plate.webp"
          alt="Theme"
          className={styles.tiltPlate}
          galleryRef={sectionRef}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.cardTitle}>Agentic AI (Rezinix AI)</h1>
          <p>
            RezinixAI offers AI-driven automation and intelligent digital
            solutions to help organizations streamline operations and
            decision-making. Their hackathon track features 3 problem statements
            focused on Agentic AI / Gen AI, with full tech stack flexibility and
            emphasis on strong ideation.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.cardTitle}>Open Innovation</h1>
          <p>
            In this track, participants can work on any real-world problem, as
            long as their solution aligns with one or more of the 17 SDGs. They
            are encouraged to think creatively and use technology to build
            impactful solutions. Participants have the freedom to use any
            technology stack (Python, JavaScript, AI frameworks like TensorFlow,
            OpenAI, etc.)
          </p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.downloadBtnWrap}>
          <a
            href="https://docs.google.com/document/d/1hSbrQ9NHM4OIeBfxlIJLEme2CAxE5mbmYsf1d_x3K5s/edit?tab=t.0#heading=h.rvy4xncse9co"
            className={styles.downloadBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.downloadBtnText}>
              View Problem Statements
            </span>
          </a>
        </div>
        <div className={styles.downloadBtnWrap}>
          <a
            href="https://docs.google.com/document/d/1NE5xfArt349aZ6-N3WsXvF4pcVYhYvlQESWQ4q_-Kz4/edit?usp=sharing"
            className={styles.downloadBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.downloadBtnText}>View Guidelines</span>
          </a>
        </div>
      </div>
      <img src={Gangster} alt="" aria-hidden="true" className={styles.faqArt} />
    </section>
  );
}

export default Domain;
