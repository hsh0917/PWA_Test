import React, { Component } from 'react';
import './help';
import Navbar from '../../containers/navbar/navbar';

class Help extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="help_container">
        <div className="container">
          <div className="circle_div1">
            <a className="btn btn-primary btn-circle1 d-flex justify-content-center align-items-center" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Breathe
            </a>
          </div>
          <div className="circle_div2">
            <a className="btn btn-danger btn-circle2 d-flex justify-content-center align-items-center" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Break
            </a>
          </div>
          <div className="circle_div3">
            <a className="btn btn-warning btn-circle3 d-flex justify-content-center align-items-center" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Reach Out
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Help;
