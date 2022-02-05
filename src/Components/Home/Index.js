import React from "react";
import "./main.css";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

class HomeCom extends React.Component {
  render() {
    return (
      <div className="home-section">
        <Navbar />
        <div className="container">
          <div className="home-box">
            <div className="home-info">
              <h5>so, you want to travel to</h5>
              <h1>space</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="home-btn">
              <div className="home-btn-fr">
                <div className="home-btn-sec">
                  <NavLink to="/destination" className="link">
                    explore
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCom;
