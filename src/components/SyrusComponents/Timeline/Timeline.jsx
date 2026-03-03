import { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PreHack from "../../../assets/data/prehack.json";
import Day1Events from "../../../assets/data/day1Events.json";
import Day2Events from "../../../assets/data/day2Events.json";
import styles from "./Timeline.module.css";
import TiltImage from "../TiltImage/TiltImage";

function Timeline() {
  const sectionRef = useRef(null);
  let stepCounter = 1;

  const renderTimeline = (events) =>
    events.map((entry, index) => (
      <VerticalTimelineElement
        key={index}
        date={entry.date}
        contentStyle={{
          background: "transparent",
          boxShadow: "none",
          padding: 0,
        }}
      >
        <div
          className={
            index % 2 === 0 ? styles.tagAlignRight : styles.tagAlignLeft
          }
        >
          <div className={styles.stepTag}>
            STEP {String(stepCounter++).padStart(2, "0")}
          </div>
        </div>
        <div className={styles.stepWrapper}>
          <div className={styles.stepCard}>
            <h3 className={styles.stepTitle}>{entry.title}</h3>
            <h4 className={styles.stepDescription}>{entry.description}</h4>
          </div>
        </div>
      </VerticalTimelineElement>
    ));

  return (
    <section className={styles.section} id="timeline" ref={sectionRef}>
      <div className={styles.container}>
        <TiltImage
          src="/GTA/Timeline_Plate.webp"
          alt="Timeline"
          className={styles.heading}
          galleryRef={sectionRef}
        />
      </div>

      <div className={styles.container}>
        {/* PRE HACKATHON */}
        <h4 className={styles.dayHeading}>Pre Hackathon Phase</h4>
        <VerticalTimeline>{renderTimeline(PreHack)}</VerticalTimeline>

        {/* DAY 1 */}
        <h4 className={styles.dayHeading}>Main Day 01</h4>
        <h3 className={styles.dayDate}>17th Mar 2026</h3>
        <VerticalTimeline>{renderTimeline(Day1Events)}</VerticalTimeline>

        {/* DAY 2 */}
        <h4 className={styles.dayHeading}>Main Day 02</h4>
        <h3 className={styles.dayDate}>18th Mar 2026</h3>
        <VerticalTimeline>{renderTimeline(Day2Events)}</VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
