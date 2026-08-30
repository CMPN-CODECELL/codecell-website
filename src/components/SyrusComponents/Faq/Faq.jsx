import { useState, useRef } from "react";
import styles from "./Faq.module.css";
import GuyOnCar from "/GTA/guyOnCar.webp";
import TiltImage from "../TiltImage/TiltImage";

function Faq() {
  const sectionRef = useRef(null);
  const faqData = [
    {
      question:
        "I do not have a lot of experience in coding. Can I still join this hackathon?",
      answer:
        "Yes, Syrus 7.0 is beginner-friendly. Even if you do not have a lot of experience, you can participate and learn new things.",
    },
    {
      question: "Where can I register for the hackathon?",
      answer:
        "Register via the registration links available on SYRUS's official website or through links provided in the emails and WhatsApp messages.",
    },
    {
      question: "What is the required team size to participate?",
      answer: "The required team size to participate is 2-4 members.",
    },
    {
      question: "Can people from different branches/years form a team?",
      answer:
        "Yes, there are no restrictions in forming teams from diverse branches and years. However, all participants must be from VESIT only.",
    },
    {
      question: "Is there any entry fee for the registration?",
      answer: "No, Syrus is free for all the participants.",
    },
    {
      question: "What is the judging criteria for the hackathon?",
      answer:
        "The judging criteria for the hackathon will be based on your innovation and understanding of the problem statement. A detailed document containing the guidelines and judging criteria will be sent to all the registered teams.",
    },
    {
      question: "Are there any particular domains for the hackathon?",
      answer:
        "Yes, the hackathon will focus on the following theme: Agentic AI and Open Innovation.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className={styles.section} id="faq-section">
      <div className={styles.container}>
        <TiltImage
          src="/GTA/FAQ_Plate.webp"
          alt="FAQs"
          className={styles.tiltPlate}
          galleryRef={sectionRef}
        />
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                onClick={() => toggleFAQ(index)}
                className={styles.faqButton}
              >
                <span className={styles.question}>{item.question}</span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === index ? styles.iconRotated : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`${styles.answerWrapper} ${
                  activeIndex === index ? styles.answerWrapperOpen : ""
                }`}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={GuyOnCar}
        alt=""
        aria-hidden="true"
        className={styles.guyOnCar}
      />
    </section>
  );
}

export default Faq;
