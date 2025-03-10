import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import IntegrateModel from "./SpiderLogo/IntegrateModel";
import VESITLogo from "../../assets/VESIT.png";
import HundredYear from "../../assets/100_logo.png";
import Habit from "../../assets/Habit_logo.png";
import Iic from "../../assets/IIC_logo.png";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const toRotate = ["Integrate", "Collaborate", "Innovate"];
  const period = 600;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container maxWidth="lg">
        <Row>
          <Col xs={12} md={6} xl={7} className="banner-col-1">
            {!isMobile && (
              <div className="banner_logoContainer">
                <img src={VESITLogo} alt="" className="college_logo" />
                <img src={HundredYear} alt="" className="years100" />
                <img src={Habit} alt="" className="habit" />
                <img src={Iic} alt="" className="iic" />
              </div>
            )}
            <div className="content-container">
              {/* <div className="codecell-college-wrapper">
                    <img src={VESITLogo} alt="" className="codecell-college-logo" />
                    <div className="codecell-college-name">
                      Vivekanand Education Society's Institute of Technology
                    </div>
                  </div> */}
              <div className="codecell-info">
                <div className="codecell-title">
                  CodeCell <span>CMPN VESIT</span>
                </div>
                <div className="codecell-title presents">
                  <span>Presents</span>
                </div>
              </div>
              <h1 className="tagline" data-text="SYRUS HACKATHON">
                SYRUS HACKATHON
              </h1>
              <h3>
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Integrate", "Collaborate", "Innovate" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h3>
              <p>
                Promoting innovation, diversity, and networking, the event
                offers future engineers a 24-hour hands-on session to explore
                current trends and pioneer new ones.
              </p>
              <Row xl={3} p={2} className="button-group">
                <Button
                  className=" mx-3"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/1Y_SUeKG31A-sWs2ibs8VxeJsQ9tz0H6YjERyAX4ddeg/edit?usp=drivesdk"
                    )
                  }
                >
                  Steps to Register
                </Button>
                <Button
                  className=" mx-3 registerUnstop"
                  onClick={() =>
                    window.open(
                      "https://unstop.com/p/syrus-hackathon-2025-codecell-tinkerers-of-computer-eng-dept-at-vesit-1420661",
                      "_blank"
                    )
                  }
                >
                  Register On Unstop
                </Button>
              </Row>
            </div>
          </Col>
          {isMobile ? (
            <div className="banner_logoContainer">
              <img src={VESITLogo} alt="" className="college_logo" />
              <img src={HundredYear} alt="" className="years100" />
              <img src={Habit} alt="" className="habit" />
              <img src={Iic} alt="" className="iic" />
            </div>
          ) : (
            <Col xs={12} md={6} xl={5} className="spiderman_logo">
              <IntegrateModel />
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
