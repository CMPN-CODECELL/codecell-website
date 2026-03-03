import { useRef } from "react";
import styles from "./Sponsor.module.css";
import TiltImage from "../TiltImage/TiltImage";
import RezinixAI from "/sponsors/RezinixAI.webp";
import Github from "/sponsors/github.webp";
import Unstop from "/sponsors/Unstop.webp";
import Rotary from "/sponsors/RotaryClubMulund.webp";
import Certificate from "/sponsors/Certificate.webp";
import XYZDomain from "/sponsors/XYZ.webp";
import Sundaram from "/sponsors/Sundaram.webp";
import InterviewBuddy from "/sponsors/InterviewBuddy.webp";
import InterviewCake from "/sponsors/InterviewCake.webp";
import DailyDough from "/sponsors/TheDailyDough.webp";
import Archer from "/sponsors/Archer.webp";
import GDGVESIT from "/sponsors/GDG-VESIT.webp";
import LFDT from "/sponsors/LFDT.webp";

const majorSponsors = [
  {
    id: 1,
    sponsorType: "Title",
    filerText: "Sponsor",
    name: "Rezinix AI",
  },
  {
    id: 2,
    sponsorType: "Brand",
    filerText: "Partner",
    name: "Github",
  },
  {
    id: 3,
    sponsorType: "Platform",
    filerText: "Partner",
    name: "Unstop",
  },
  {
    id: 4,
    sponsorType: "Sustainability",
    filerText: "Partner",
    name: "Rotary",
  },
  {
    id: 5,
    sponsorType: "Certificate",
    filerText: "Partner",
    name: "Give My Certificate",
  },
];

const associateSponsors = [
  { id: 1, name: "XYZ" },
  { id: 2, name: "Sundaram" },
  { id: 3, name: "Interview Buddy" },
  { id: 4, name: "Interview Cake" },
  { id: 5, name: "The Daily Dough" },
  { id: 6, name: "Archer Tech Lab" },
];

const communityPartners = [
  { id: 1, name: "GDG VESIT" },
  { id: 2, name: "LFDT" },
];

const sponsorLogos = {
  "Rezinix AI": RezinixAI,
  Github,
  Unstop,
  Rotary,
  "Give My Certificate": Certificate,
  XYZ: XYZDomain,
  Sundaram,
  "Interview Buddy": InterviewBuddy,
  "Interview Cake": InterviewCake,
  "The Daily Dough": DailyDough,
  "Archer Tech Lab": Archer,
  "GDG VESIT": GDGVESIT,
  LFDT,
};

function Sponsor() {
  const sectionRef = useRef(null);
  return (
    <section id="sponsors" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <TiltImage
          src="/GTA/Sponsors_Plate.webp"
          alt="Our Sponsors"
          className={styles.tiltPlate}
          galleryRef={sectionRef}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.sponsorGrid}>
          {majorSponsors.map((sponsor) => (
            <div key={sponsor.id} className={styles.sponsorCard}>
              <h3 className={styles.sponsorType}>
                <span>{sponsor.sponsorType}</span>{" "}
                <span>{sponsor.filerText}</span>
              </h3>
              <div className={styles.sponsorCircle}>
                <img
                  src={sponsorLogos[sponsor.name]}
                  alt={sponsor.name}
                  className={styles.sponsorLogo}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Associate Sponsors</h3>
          <div className={styles.associateGrid}>
            {associateSponsors.map((sponsor) => (
              <div className={styles.associateItem} key={sponsor.id}>
                <div className={styles.associateCircle}>
                  <img
                    src={sponsorLogos[sponsor.name]}
                    alt={sponsor.name}
                    className={styles.sponsorLogo}
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Community Partners</h3>
          <div className={styles.associateGrid}>
            {communityPartners.map((sponsor) => (
              <div className={styles.associateItem} key={sponsor.id}>
                <div className={styles.associateCircle}>
                  <img
                    src={sponsorLogos[sponsor.name]}
                    alt={sponsor.name}
                    className={styles.sponsorLogo}
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/GTA/sponserguy.webp"
        alt=""
        aria-hidden="true"
        className={styles.sponsorGuy}
      />
    </section>
  );
}

export default Sponsor;
