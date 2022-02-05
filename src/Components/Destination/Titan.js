import React from "react";
import { NavLink } from "react-router-dom";
import Titanimg from "../../images/destination/image-titan.webp";
import Navbar from "../Navbar/Navbar";

function Titan() {
  return (
    <React.Fragment>
      <div className="destination-section">
        <Navbar />
        <div className="container">
          <h3>
            <span>01</span> pick your destination
          </h3>
          <div className="des-box">
            <div className="row">
              <div className="col-sm sol-md-6">
                <div className="planet">
                  <img src={Titanimg} alt="." />
                </div>
              </div>
              <div className="col-sm sol-md-6">
                <div className="planet-info">
                  <div className="links">
                    <div className="link">
                      <NavLink to="/destination">Moon</NavLink>
                    </div>
                    <div className="link">
                      <NavLink to="/destination-2">mars</NavLink>
                    </div>
                    <div className="link">
                      <NavLink to="/destination-3">europa</NavLink>
                    </div>
                    <div className="link">
                      <NavLink to="/destination-4">titan</NavLink>
                    </div>
                  </div>
                  <div className="info">
                    <h1>titan</h1>
                    <p>
                      The only moon known to have a dense atmosphere other than
                      Earth, Titan is a home away from home (just a few hundred
                      degrees colder!). As a bonus, you get striking views of
                      the Rings of Saturn.
                    </p>
                  </div>
                  <hr />
                  <div className="planet-space">
                    <div className="km">
                      <p>AVG. DISTANCE</p>
                      <h4>1.6 bil. km</h4>
                    </div>
                    <div className="day">
                      <p>Est. travel time</p>
                      <h4>7 years</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Titan;
