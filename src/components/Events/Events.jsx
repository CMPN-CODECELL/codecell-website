import React from "react";
import { useRef } from "react";
import "./Events.css";

const Events = () => {
  const targetRef = useRef(null);

  const events = [
    {
      "event-name": "Web Verse",
      "event-image": "/eventImages/webverse.jpg",
      "event-desc":
        "The web development session tailored for second-year students covered HTML, CSS, JavaScript, and more. Participants gained hands-on experience in building responsive designs, adding interactivity, and connecting databases to create dynamic web applications.",
      "event-time": "Aug 2023",
      "event-guest": "Codecell Team",
    },
    {
      "event-name": "DSAccelerate",
      "event-image": "/eventImages/dsaaccelerate.jpg",
      "event-desc":
        "The DSA Boot Camp was a 4-week program for TE students, offering in-depth learning of Data Structures and Algorithms through coding challenges, optimization techniques, and algorithmic concepts to enhance problem-solving skills",
      "event-time": "Aug 2023",
      "event-guest": "Codecell Team",
    },
    {
      "event-name": "Design Thinking",
      "event-image": "/eventImages/designthinking.jpg",
      "event-desc":
        "CodeCell hosted 'Unleashing Innovation & Creativity Through Design Thinking', led by Dr. Prashant Kanade and the design team. The event explored design thinking and hands-on Figma exercises for creating innovative solutions.",
      "event-time": "Aug 2023",
      "event-guest": "Dr. Prashant Kanade",
    },
    {
      "event-name": "Introduction to Open Source",
      "event-image": "/eventImages/opensource.jpeg",
      "event-desc":
        "Hacktoberfest 2023’s grand opening event, 'Intro to Open-Source', covered insights on what open-source is, showcased projects, and highlighted opportunities in the open-source community.",
      "event-time": "Oct 2023",
      "event-guest": "Codecell Team",
    },
    {
      "event-name": "GSoC Talk",
      "event-image": "/eventImages/gsoc.jpg",
      "event-desc":
        "The GSoC Talk at VESIT by CodeCell introduced students to Google Summer of Code. The event covered open-source contributions, proposal writing, and GSoC opportunities under the direction of Mr. Savio Dias.",
      "event-time": "Oct 2023",
      "event-guest": "Mr. Savio Dias",
    },
    {
      "event-name": "Introduction to Git & Github",
      "event-image": "/eventImages/introtogithub.jpg",
      "event-desc":
        "CodeCell organized a Git and GitHub Workshop at VESIT, introducing students to version control, collaboration, and project management. Participants explored GitHub’s features and learned about open-source contributions.",
      "event-time": "Oct 2023",
      "event-guest": "Codecell Team",
    },
    {
      "event-name": "Syrus Hackathon",
      "event-image": "/eventImages/syrus.jpeg",
      "event-desc":
        "The Syrus Hackathon, powered by Devfolio, showcased 250+ students in a 24-hour coding marathon. CodeCell’s flagship event promoted innovation in Web 2.0, Web 3.0, and GenAI.",
      "event-time": "Feb 2024",
    },
  ];

  return (
    <section id="events">
      <div className="events-wrapper">
        <div className="section-title" id="events-link">
          Our Workshops
        </div>
        <div ref={targetRef} className="events-container">
          {events.map((event) => {
            return (
              <div className="event hacktoberfest" key={event["event-name"]}>
                {/* <motion.span style={{ x }} className="hacktober anim-1">
                  {`${event["event-name"]}`.toUpperCase().repeat(4)}
                </motion.span>
                <motion.span style={{ x }} className="hacktober anim-2">
                  {`${event["event-name"]}`.toUpperCase().repeat(4)}
                </motion.span> */}
                {/* <div className="event-details"> */}
                <div
                  className="background"
                  style={{ backgroundImage: `url(${event["event-image"]})` }}
                ></div>
                <div className="event-info">
                  <div className="event-name">
                    <span>{event["event-name"]}</span>
                  </div>
                  <div className="event-desc">{event["event-desc"]}</div>
                  <div className="event-info-wrapper">
                    <div className="event-month">
                      Date: {event["event-time"]}
                    </div>
                    {event["event-guest"] && (
                      <div className="event-guest">
                        Speaker(s): {event["event-guest"]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
