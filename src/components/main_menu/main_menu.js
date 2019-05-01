import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './main_menu';

class Menu extends Component {
  render() {
    return (
      <div className="main_menu_container">
        <div className="main_menu_centered">
          <h1>TOH Resiliency App</h1>
          <h3>Welcome, Name</h3>
          <h3>We have created an account for you</h3>
          <h3>You can start by selecting an option below</h3>
          <Link to="/self_assessment" className="btn btn-primary">
          Begin a self assessment
          </Link>
          <Link to="/help" activeStyle={{ color: 'red' }} className="btn btn-primary">
            Get help right now
          </Link>
          <Link to="/resiliency_resources" className="btn btn-primary">
            Learn about resiliency
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
