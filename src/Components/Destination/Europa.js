import React from "react";
import { NavLink } from "react-router-dom";
import Europaimg from "../../images/destination/image-europa.webp";
import Navbar from "../Navbar/Navbar";

function Europa() {
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
                  <img src={Europaimg} alt="." />
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
                    <h1>europa</h1>
                    <p>
                      The smallest of the four Galilean moons orbiting Jupiter,
                      Europa is a winter lover’s dream. With an icy surface,
                      it’s perfect for a bit of ice skating, curling, hockey, or
                      simple relaxation in your snug wintery cabin.
                    </p>
                  </div>
                  <hr />
                  <div className="planet-space">
                    <div className="km">
                      <p>AVG. DISTANCE</p>
                      <h4>628 mil. km</h4>
                    </div>
                    <div className="day">
                      <p>Est. travel time</p>
                      <h4>3 years</h4>
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

export default Europa;
