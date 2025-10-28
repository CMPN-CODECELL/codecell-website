import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import CodecellLogo from "../../assets/codecell.svg";

function CodecellNav({ isUpcomingWorkshops = false }) {
  return (
    <Navbar
      collapseOnSelect
      expand="xxl"
      className="bg-body-tertiary codecell-nav"
      variant="dark"
    >
      <Navbar.Brand href="/" className="navbar-title">
        <img src={CodecellLogo} className="codecell-logo" />
        CodeCell
        {/* <span className="VESIT">VESIT</span>
        <img src={VESITLogo} className="vesit-logo" /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#e8eaed"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </Navbar.Toggle>
      <Navbar.Collapse className="nav-items-wrapper" id="responsive-navbar-nav">
        <div className="nav-items">
          {/* <div className="nav-item syrus-nav">
            <a href="/syrus">Syrus'25</a>
          </div> */}
          {isUpcomingWorkshops && (
            <div className="nav-item">
              <a href="/#upcoming-events">Upcoming</a>
            </div>
          )}
          <div className="nav-item">
            <a href="/team">Team</a>
          </div>
          <div className="nav-item">
            <a href="/#events">Events</a>
          </div>
          <div className="nav-item">
            <a href="/#contact-us">Contact</a>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CodecellNav;
