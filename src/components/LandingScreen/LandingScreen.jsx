import React from "react";
import Button from "react-bootstrap/Button";
import CodecellModel from "../CodecellModel/CodecellModel";
import GlassContainer from "../GlassContainer/GlassContainer";
import VESITLogo from "/VESIT.png";
import "./LandingScreen.css";

const LandingScreen = ({ events = [] }) => {
  const hasEvents = Array.isArray(events) && events.length > 0;
  const showEventsLabel =
    typeof window !== "undefined" && window.innerWidth > 1350;

  return (
    <div className="landing-screen" id="landing-screen">
      <div className="info-section">
        <div className="codecell-college-wrapper">
          <img src={VESITLogo} alt="" className="codecell-college-logo" />
          <div className="codecell-college-name">
            Vivekanand Education Society's Institute of Technology
          </div>
        </div>
        <GlassContainer>
          <div className="codecell-info">
            <div className="codecell-title">
              CodeCell++ <span>VESIT</span>
            </div>
            <div className="codecell-subtitle">
              Tinkerers from Computer Engineering
            </div>
          </div>
        </GlassContainer>
        <div className="landing-buttons">
          {/* {hasEvents && (
            <Button className="upcoming-button" href="#upcoming-events">
              Upcoming <br />
              {showEventsLabel && "Events"}
            </Button>
          )} */}
          <Button className="syrus-button-landing" href="/syrus">
            SYRUS'26
          </Button>
        </div>
      </div>
      <div className="codecell-model">
        <CodecellModel />
      </div>
    </div>
  );
};

export default LandingScreen;
