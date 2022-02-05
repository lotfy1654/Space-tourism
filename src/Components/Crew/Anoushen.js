import React from "react";
import { NavLink } from "react-router-dom";
import AnoImg from "../../images/crew/image-anousheh-ansari.webp";
import Navbar from "../Navbar/Navbar";

function AnoushenCrew() {
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
              <h4>Flight Engineer </h4>
              <h2>Anousheh Ansari</h2>
              <p>
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.
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
            <div className="crew-img anoubox">
              <img src={AnoImg} alt="." className="anouimg" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AnoushenCrew;
