import React, { useEffect, useState } from "react";
import { MatrixRainingCode } from "../../components";
import "./Landing.css";
import LandingScreen from "../../components/LandingScreen/LandingScreen";
import CodecellNav from "../../components/Navbar/Navbar";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import Footer from "../../components/Footer/Footer";
import Events from "../../components/Events/Events";
import ContactUs from "../../components/ContactUs/ContactUs";
import Matrix from "../../components/MatrixRainingCode/Matrix";
import ScrollToTopButton from "../../components/misc/ScrollToTop/ScrollToTop";

function Landing() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
      const anchorEl = document.getElementById(anchor);
      if (anchorEl) {
        anchorEl.scrollIntoView();
      }
    }
  }, []);

  useEffect(() => {
    const url = import.meta.env.VITE_EVENTS_RAW_LINK;

    if (!url) {
      return;
    }

    const fetchEvents = async () => {
      try {
        const response = await fetch(url);
        const fetchedEvents = await response.json();
        setEvents(fetchedEvents);
      } catch (err) {
        console.log(err.message);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="main-screen" id="main-screen">
      {/* <MatrixRainingCode /> */}
      <Matrix />
      <div className="components">
        <CodecellNav isUpcomingEvents={events.length > 0} />
        <LandingScreen events={events} />
        <UpcomingEvents events={events} />
        <Events />
        <ContactUs />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Landing;
