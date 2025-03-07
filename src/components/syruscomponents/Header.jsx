import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import SyrusLogo from '../assets/syrus_logo.png';
import SyrusLogo from '../../assets/SyrusLogo.svg'
import Modal from 'react-bootstrap/Modal';
import SponsorUs from './SponsorUs';

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setNavbarActive(false); 
      }
    };

    window.addEventListener("scroll", onScroll);
    document.addEventListener("click", handleClickOutside);  

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleNavbarClick = () => {
    setNavbarActive(!navbarActive);  
  };

  return (
    <Navbar 
      expand="md" 
      className={`syrus ${scrolled ? "scrolled" : ""} ${navbarActive ? "active" : ""}`} 
      onClick={handleNavbarClick}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={SyrusLogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              {/* <Nav.Link href="#sponsors" 
              className={activeLink === 'sponsors' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('sponsors')}>
              Sponsors
            </Nav.Link> */}
            <Nav.Link href="#timeline" 
              className={activeLink === 'timeline' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('timeline')}>
              Timeline
            </Nav.Link>
            <Nav.Link href="#domain" 
              className={activeLink === 'domain' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('domain')}>
              Theme
            </Nav.Link>
            {/* <Nav.Link href="#sponsors" 
              className={activeLink === 'sponsors' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('sponsors')}>
              Sponsors
            </Nav.Link> */}
            <Nav.Link href="#gallery" 
              className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('gallery')}>
              Gallery
            </Nav.Link>
            <Nav.Link href="#faq-section" 
              className={activeLink === 'faq-section' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('faq-section')}>
              FAQs
            </Nav.Link>
            {/* <Nav.Link href="#sponsorsus" 
              className={activeLink === 'sponsorsus' ? 'active navbar-link' : 'navbar-link'} 
              onClick={handleShow}>
              Sponsor Us?
            </Nav.Link>
              <Modal
        show={show}
        onHide={handleClose}
        backdrop="true" 
        keyboard={true}
      >
        <Modal.Body>
          <SponsorUs />
        </Modal.Body>
        <Modal.Footer>
          <Button className="cta-button-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
