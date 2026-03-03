import React from "react";
import styles from "./UpcomingEvents.module.css";
import { Button } from "react-bootstrap";

const UpcomingEvents = ({ events = [] }) => {
  const hasevents = Array.isArray(events) && events.length > 0;

  if (!hasevents) {
    return null;
  }
  // const events = [
  //   {
  //     name: "Introduction to Python Programming",
  //     image_link: "https://i.imgur.com/hw3f8XJ.png",
  //     google_form_link: "https://forms.gle/placeholder1",
  //   },
  // ];
  return (
    <section id={styles["upcoming-events"]}>
      <div className={styles["upcoming-wrapper"]}>
        <div className="section-title">Upcoming Events</div>
        <div className={styles["upcoming-events"]}>
          <div className={styles["events-wrapper"]}>
            {events.slice(0, 3).map((event) => {
              return (
                <a
                  href={event.google_form_link}
                  target="_blank"
                  className={styles["event-card"]}
                  key={event.name}
                  style={{
                    backgroundImage: `url(${event.image_link})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <div className={styles["event-title"]}>{event.name}</div> */}
                </a>
              );
            })}
          </div>
          {hasevents && (
            <div className={styles["rsvp"]}>
              <div className={styles["rsvp-text"]}>
                RSVP To our latest event now!
              </div>
              <Button href={events[0].google_form_link} target="_blank">
                RSVP Now!
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
