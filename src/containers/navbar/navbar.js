import React, { Component } from 'react';
import { Link } from 'react-router';

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
                <a className="nav-link" href="#">
                  Self-Assessment 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resiliency
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Get Help
                </a>
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
