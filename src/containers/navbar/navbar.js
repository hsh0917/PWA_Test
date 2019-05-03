import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-ohri navbar-dark justify-content-end">
          <div className="container">
          <a className="navbar-brand" href="#">
            TOH Resiliency App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="collapsibleNavbar">
            <ul className="navbar-nav text-right">
              <li className="nav-item">
                <NavLink to="/self_assessment"><a className="nav-link">
                  Self-Assessment 
                </a>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/resiliency_resources">
                <a className="nav-link">
                  Resiliency
                </a>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/help">
                <a className="nav-link">
                  Get Help
                </a>
              </NavLink>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
