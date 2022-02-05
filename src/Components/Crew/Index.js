import React from "react";
import Navbar from "../Navbar/Navbar";
import "./main.css";
import { NavLink } from "react-router-dom";
import DouglasImg from "../../images/crew/image-douglas-hurley.webp";
class CrewCom extends React.Component {
  render() {
    return (
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
              <h4>commander</h4>
              <h2>Douglas Hurley</h2>
              <p>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
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
              <img src={DouglasImg} alt="." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CrewCom;
