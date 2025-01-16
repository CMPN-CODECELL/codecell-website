import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import IntegrateModel from "./SpiderLogo/IntegrateModel";
import VESITLogo from "../../assets/VESIT.png";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Integrate", "Collaborate", "Innovate"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
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
                <Button className=" mx-3" onClick={() => navigate("/")}>
                  CodeCell
                </Button>
                <Button className=" mx-3">Register</Button>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="spiderman_logo">
            {/* <img src={SpiderMan} alt="SpiderMan" className="spiderman-image" /> */}
            <IntegrateModel />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
