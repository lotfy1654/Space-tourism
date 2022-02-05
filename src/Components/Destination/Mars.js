import React from "react";
import { NavLink } from "react-router-dom";
import Marsimg from "../../images/destination/image-mars.webp";
import Navbar from "../Navbar/Navbar";

function Mars() {
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
                  <img src={Marsimg} alt="." />
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
                    <h1>mars</h1>
                    <p>
                      Don’t forget to pack your hiking boots. You’ll need them
                      to tackle Olympus Mons, the tallest planetary mountain in
                      our solar system. It’s two and a half times the size of
                      Everest!
                    </p>
                  </div>
                  <hr />
                  <div className="planet-space">
                    <div className="km">
                      <p>AVG. DISTANCE</p>
                      <h4>225 MIL. km</h4>
                    </div>
                    <div className="day">
                      <p>Est. travel time</p>
                      <h4>9 months</h4>
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

export default Mars;
