import React, { Suspense, useRef, useState } from "react";
import "./Team.css";
import Accordion from "react-bootstrap/Accordion";
import CodecellNav from "../../components/Navbar/Navbar";
import Card from "../../components/misc/Card/Card";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/misc/Loading/Loading";
import ScrollToTopButton from "../../components/misc/ScrollToTop/ScrollToTop";
import faculty from "../../assets/data/faculty.json";
import be from "../../assets/data/be.json";
import te from "../../assets/data/te.json";
import se from "../../assets/data/se.json";

const Team = () => {
  const [activeEventKey, setActiveEventKey] = useState("0");
  const facultyRef = useRef(null);
  const beRef = useRef(null);
  const teRef = useRef(null);
  const seRef = useRef(null);

  const handleClickToggle = (eventKey, eventRef) => {
    if (eventKey === activeEventKey) {
      setActiveEventKey("");
    } else {
      setActiveEventKey(eventKey);
      setTimeout(() => {
        eventRef.current.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
        });
      }, 400);
    }
  };

  return (
    <div id="team">
      <ScrollToTopButton />
      <CodecellNav />
      <div className="meet-the-team">
        Meet The&nbsp;<span>CodeCell</span>&nbsp;Team
      </div>
      <Accordion flush defaultActiveKey="0">
        <Accordion.Item
          className="team-section faculty"
          eventKey="0"
          ref={facultyRef}
        >
          <div className="team-wrapper">
            <Accordion.Header
              className="team-title"
              onClick={() => handleClickToggle("0", facultyRef)}
            >
              <span>Faculty advisors</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="team-cards">
                {faculty.map((card) => (
                  <Card card={card} key={card.name} />
                ))}
              </div>
            </Accordion.Body>
          </div>
        </Accordion.Item>
        <Accordion.Item
          className="team-section be-members"
          eventKey="1"
          ref={beRef}
        >
          <div className="team-wrapper">
            <Accordion.Header
              className="team-title"
              onClick={() => handleClickToggle("1", beRef)}
            >
              <span>BE Members</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="team-cards">
                {be.map((card) => (
                  <Card card={card} key={card.name} />
                ))}
              </div>
            </Accordion.Body>
          </div>
        </Accordion.Item>
        <Accordion.Item
          className="team-section te-members"
          eventKey="2"
          ref={teRef}
        >
          <div className="team-wrapper">
            <Accordion.Header
              className="team-title"
              onClick={() => handleClickToggle("2", teRef)}
            >
              <span>TE Members</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="team-cards">
                {te.map((card) => (
                  <Card card={card} key={card.name} />
                ))}
              </div>
            </Accordion.Body>
          </div>
        </Accordion.Item>
        <Accordion.Item
          className="team-section se-members"
          eventKey="3"
          ref={seRef}
        >
          <div className="team-wrapper">
            <Accordion.Header
              className="team-title"
              onClick={() => handleClickToggle("3", seRef)}
            >
              <span>SE Members</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="team-cards">
                {se.map((card) => (
                  <Card card={card} key={card.name} />
                ))}
              </div>
            </Accordion.Body>
          </div>
        </Accordion.Item>
      </Accordion>

      <Footer />
    </div>
  );
};

export default Team;
