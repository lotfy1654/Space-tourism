import React from "react";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
function Space() {
  return (
    <div className="technology-section">
      <Navbar />
      <div className="head">
        <h3>
          <span>03</span> space launch 101
        </h3>
      </div>
      <div className="tec-box">
        <div className="tec-box-info">
          <div className="container">
            <div className="tec-box-links">
              <NavLink to="/technology">
                <div className="link">1</div>
              </NavLink>
              <NavLink to="/technology-2">
                <div className="link">2</div>
              </NavLink>
              <NavLink to="/technology-3">
                <div className="link">3</div>
              </NavLink>
            </div>
            <div className="tec-text">
              <h3>THE TERMINOLOGY…</h3>
              <h1>SPACE CAPSULE</h1>
              <p>
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          </div>
        </div>
        <div className="tec-box-img space"></div>
      </div>
    </div>
  );
}

export default Space;
