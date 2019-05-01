import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './about';

class About extends Component {
  render() {
    return (
      <div className="about_container">
        <div className="about_centered">
          <h1>TOH Resiliency App</h1>
          <h3>Some text here talking about how great the app is and mybe how it helps you manage your mental health</h3>
          <Link to="/login" className="btn btn-primary">
            Let's begin
          </Link>
        </div>
      </div>
    );
  }
}

export default About;
