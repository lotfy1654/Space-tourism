import React from "react";
import Navbar from "../Navbar/Navbar";
import "./main.css";
import Moonimg from "../../images/destination/image-moon.webp";
import { NavLink } from "react-router-dom";

class DestinationCom extends React.Component {
  render() {
    return (
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
                  <img src={Moonimg} alt="." />
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
                    <h1>moon</h1>
                    <p>
                      See our planet as you’ve never seen it before. A perfect
                      relaxing trip away to help regain perspective and come
                      back refreshed. While you’re there, take in some history
                      by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                  </div>
                  <hr />
                  <div className="planet-space">
                    <div className="km">
                      <p>AVG. DISTANCE</p>
                      <h4>384,400 km</h4>
                    </div>
                    <div className="day">
                      <p>Est. travel time</p>
                      <h4>3 days</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationCom;
