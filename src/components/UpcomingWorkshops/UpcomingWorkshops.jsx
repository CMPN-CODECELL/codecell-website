import React, { useEffect, useState } from "react";
import "./UpcomingWorkshops.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const UpcomingWorkshops = () => {
  const [workshops, setWorkshops] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_WORKSHOPS_RAW_LINK;
    axios
      .get(url)
      .then((data) => {
        // console.log("response: " + JSON.stringify(data.data));
        setWorkshops(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // const workshops = [
  //   {
  //     name: "Introduction to Python Programming",
  //     image_link: "https://i.imgur.com/hw3f8XJ.png",
  //     google_form_link: "https://forms.gle/placeholder1",
  //   },
  // ];

  return (
    <section id="upcoming-events">
      <div className="upcoming-wrapper">
        <div className="section-title">Upcoming Workshops</div>
        <div className="upcoming-workshops">
          <div className="workshops-wrapper">
            {workshops &&
              workshops.slice(0, 3).map((workshop) => {
                return (
                  <a
                    href={workshop.google_form_link}
                    target="_blank"
                    className="workshop-card"
                    key={workshop.name}
                    style={{
                      backgroundImage: `url(${workshop.image_link})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <div className="workshop-title">{workshop.name}</div> */}
                  </a>
                );
              })}
          </div>
          {workshops && (
            <div className="rsvp">
              <div className="rsvp-text">RSVP To our latest workshop now!</div>
              <Button href={workshops[0].google_form_link} target="_blank">
                RSVP Now!
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWorkshops;
