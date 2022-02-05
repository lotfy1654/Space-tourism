import React from "react";
import { NavLink } from "react-router-dom";
import MarkImg from "../../images/crew/image-mark-shuttleworth.webp";
import Navbar from "../Navbar/Navbar";

function MarkCrew() {
  return (
    <React.Fragment>
      <div className="crew-section">
        <Navbar />
        <div className="container">
          <div className="head">
            <h3>
              <span>02</span> meet your crew
            </h3>
          </div>
          <div className="crew-box">
            <div className="crew-info">
              <h4>Mission Specialist </h4>
              <h2>MARK SHUTTLEWORTH</h2>
              <p>
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
              <div className="links">
                <NavLink to="/crew">
                  <div className="link"></div>
                </NavLink>
                <NavLink to="/crew-2">
                  <div className="link"></div>
                </NavLink>
                <NavLink to="/crew-3">
                  <div className="link"></div>
                </NavLink>
                <NavLink to="/crew-4">
                  <div className="link"></div>
                </NavLink>
              </div>
            </div>
            <div className="crew-img">
              <img src={MarkImg} alt="." className="markimg" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MarkCrew;
