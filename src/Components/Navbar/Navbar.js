import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
import Logo from "../../images/shared/logo.svg";
import { FaAlignRight, FaRegTimesCircle } from "react-icons/fa";
class Navbar extends React.Component {
  state = {
    showNav: false,
  };
  openNav() {
    let showNav = this.state.showNav;
    this.setState({
      showNav: !showNav,
    });
  }

  closeNav() {
    let showNav = this.state.showNav;
    this.setState({
      showNav: !showNav,
    });
  }

  render() {
    return (
      <div className="navbar-main">
        <div className="box">
          <div className="logo-box">
            <img src={Logo} alt="." />
          </div>
          <div className="nav-links-md">
            <div className="link">
              <NavLink to="/">00 Home</NavLink>
            </div>
            <div className="link">
              <NavLink to="/destination">01 Destination</NavLink>
            </div>
            <div className="link">
              <NavLink to="/crew">02 Crew</NavLink>
            </div>
            <div className="link">
              <NavLink to="/technology">03 Technology</NavLink>
            </div>
          </div>
          <div className="nav-links-sm">
            <div onClick={() => this.openNav()} className="open-nav">
              {this.state.showNav ? "" : <FaAlignRight />}
            </div>
            <div
              className={`nav ${this.state.showNav ? "show-nav" : ""}`}
              id="navBar"
            >
              <div onClick={() => this.closeNav()} className="close-nav">
                <FaRegTimesCircle />
              </div>
              <div className="nav-links">
                <div className="link">
                  <NavLink onClick={() => this.closeNav()} to="/">
                    00 Home
                  </NavLink>
                </div>
                <div className="link">
                  <NavLink onClick={() => this.closeNav()} to="/crew">
                    01 Crew
                  </NavLink>
                </div>
                <div className="link">
                  <NavLink onClick={() => this.closeNav()} to="/destination">
                    02 Destination
                  </NavLink>
                </div>
                <div className="link">
                  <NavLink onClick={() => this.closeNav()} to="/technology">
                    03 Technology
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

export default Navbar;
