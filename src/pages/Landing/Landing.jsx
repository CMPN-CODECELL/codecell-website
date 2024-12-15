import React, { Suspense, useEffect, useState } from "react";
import { MatrixRainingCode } from "../../components";
import "./Landing.css";
import LandingScreen from "../../components/LandingScreen/LandingScreen";
import CodecellNav from "../../components/Navbar/Navbar";
import UpcomingWorkshops from "../../components/UpcomingWorkshops/UpcomingWorkshops";
import Footer from "../../components/Footer/Footer";
import Events from "../../components/Events/Events";
import ContactUs from "../../components/ContactUs/ContactUs";
import Matrix from "../../components/MatrixRainingCode/Matrix";

function Landing() {
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
      const anchorEl = document.getElementById(anchor);
      if (anchorEl) {
        anchorEl.scrollIntoView();
      }
    }
  }, []);
  return (
    <div className="main-screen" id="main-screen">
      {/* <MatrixRainingCode /> */}
      <Matrix />
      <div className="components">
        <CodecellNav />
        <LandingScreen />
        <UpcomingWorkshops />
        <Events />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
