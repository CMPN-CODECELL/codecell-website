import React, { useEffect, useState } from "react";
import axios from "axios";
import { MatrixRainingCode } from "../../components";
import "./Landing.css";
import LandingScreen from "../../components/LandingScreen/LandingScreen";
import CodecellNav from "../../components/Navbar/Navbar";
import UpcomingWorkshops from "../../components/UpcomingWorkshops/UpcomingWorkshops";
import Footer from "../../components/Footer/Footer";
import Events from "../../components/Events/Events";
import ContactUs from "../../components/ContactUs/ContactUs";
import Matrix from "../../components/MatrixRainingCode/Matrix";
import ScrollToTopButton from "../../components/misc/ScrollToTop/ScrollToTop";

function Landing() {
  const [workshops, setWorkshops] = useState([]);

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
    const url = import.meta.env.VITE_WORKSHOPS_RAW_LINK;

    if (!url) {
      return;
    }

    axios
      .get(url)
      .then((data) => {
        const fetchedWorkshops = Array.isArray(data.data) ? data.data : [];
        setWorkshops(fetchedWorkshops);
      })
      .catch((err) => {
        console.log(err.message);
        setWorkshops([]);
      });
  }, []);

  return (
    <div className="main-screen" id="main-screen">
      {/* <MatrixRainingCode /> */}
      <Matrix />
      <div className="components">
        <CodecellNav />
        <LandingScreen workshops={workshops} />
        <UpcomingWorkshops workshops={workshops} />
        <Events />
        <ContactUs />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Landing;
