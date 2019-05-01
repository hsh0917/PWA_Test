import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './landing';

class Landing extends Component {
  state={
    redirect: false
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 4000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    return (
    this.state.redirect ? 
    <Redirect to='/about' /> : 
      <div className="landing_container">
        <div className="landing_centered">
          <h1>Welcome</h1>
          <h1>to</h1>
          <h1>TOH Resiliency App</h1>          
        </div>
      </div>
    );
  }
}

export default Landing;
