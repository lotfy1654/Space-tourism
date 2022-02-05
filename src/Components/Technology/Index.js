import React from "react";
import Navbar from "../Navbar/Navbar";
import "./main.css";
import { NavLink } from "react-router-dom";
class TechnologyCom extends React.Component {
  render() {
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
                <h1>LAUNCH VEHICLE</h1>
                <p>
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>
            </div>
          </div>
          <div className="tec-box-img launch"></div>
        </div>
      </div>
    );
  }
}

export default TechnologyCom;
