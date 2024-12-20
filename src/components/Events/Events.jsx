import React, { useState } from "react";
import { useRef } from "react";
import "./Events.css";
import events from "../../assets/data/events.json";
import { Button } from "react-bootstrap";

const Events = () => {
  const targetRef = useRef(null);
  const upcomingRef = useRef(null);
  const [threshold, setThreshold] = useState(7); // Initial threshold
  const [isExpanded, setIsExpanded] = useState(false); // Tracks if the full list is shown

  const handleToggle = () => {
    if (isExpanded) {
      // Scroll to the top when collapsing
      upcomingRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setIsExpanded((prev) => !prev);
    setThreshold(isExpanded ? 7 : events.length); // Toggle between threshold and all events
  };

  return (
    <section id="events" ref={upcomingRef}>
      <div className="events-wrapper">
        <div className="section-title" id="events-link">
          Our Workshops
        </div>
        <div ref={targetRef} className="events-container">
          {events
            .toReversed()
            .slice(0, threshold)
            .map((event) => {
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
                    style={{
                      backgroundImage: `url(/eventImages/${event["event-image"]})`,
                    }}
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
                          Speaker(s):{" "}
                          <div className="event-guest-names">
                            {event["event-guest"]}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Button className="see-more-button" onClick={handleToggle}>
          {isExpanded ? "See Less" : "See More"}
        </Button>
      </div>
    </section>
  );
};

export default Events;
