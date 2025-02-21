import { Container, Card, Button, Row, Col } from 'react-bootstrap';

function SponsorUs(){
    return(
        <section id="sponsorsus" className="bg-[#121211] text-white">
            <div className="sponsor-section">
            <Container>
                <Card className="main-card">
                <Card.Body>
                    <h1 className="sponsor-title">Want to Help Us?</h1>
                    <p className="sponsor-subtitle">
                        With great power comes great responsibility - Help us empower the next generation of tech heroes
                    </p>

                <Row className="g-4">
                    <Col md={4}>
                        <Card className="sponsor-card">
                            <Card.Body>
                                <Card.Title>Monetary Sponsorships</Card.Title>
                                <Card.Text>
                                Direct financial contributions to support the event, helping us swing to new heights!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="sponsor-card">
                            <Card.Body>
                            <Card.Title>In-Kind Sponsorships</Card.Title>
                            <Card.Text>
                                Non-monetary support such as food, merchandise, software tools, or other resources that can enhance the hackathon experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                  <Col md={4}>
                    <Card className="sponsor-card">
                      <Card.Body>
                        <Card.Title>Internship Offers</Card.Title>
                        <Card.Text>
                          Opportunities for participants to gain hands-on industry experience through internships provided by sponsors.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <div className="buttons-wrapper">
                  <a href="https://drive.google.com/file/d/1ZPO1ehM4UrMMXE9x8frPdxAhB3xNiaaM/view?usp=sharing">
                    <Button className="cta-button-primary">
                      Sponsorship Prospectus
                    </Button>
                  </a>
                  <a href="https://drive.google.com/file/d/1j03-yU3bezuXrNIxKj4Y3b2Dql9uTPTN/view?usp=sharing">
                    <Button className="cta-button-primary">
                      Syrus Brochure
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Container>
        </div>
        </section>
    )
}

export default SponsorUs;