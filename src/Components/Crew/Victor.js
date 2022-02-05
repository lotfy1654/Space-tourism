import React from "react";
import { NavLink } from "react-router-dom";
import VictorImg from "../../images/crew/image-victor-glover.webp";
import Navbar from "../Navbar/Navbar";

function VictorCrew() {
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
              <h4>PILOT </h4>
              <h2>Victor Glover</h2>
              <p>
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.
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
            <div className="crew-img victorbox">
              <img src={VictorImg} alt="." className="markimg" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VictorCrew;
