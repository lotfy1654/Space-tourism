import React from "react";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
function Spaceport() {
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
              <h1>SPACEPORT</h1>
              <p>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          </div>
        </div>
        <div className="tec-box-img spaceport"></div>
      </div>
    </div>
  );
}

export default Spaceport;
