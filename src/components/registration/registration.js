import React, { Component } from 'react';
import './registration';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      age: ''
    };

    this.genderHandleChange = this.genderHandleChange.bind(this);
    this.ageHandleChange = this.ageHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  genderHandleChange(event) {
    this.setState({gender: event.target.value});
  }

  ageHandleChange(event) {
    this.setState({age: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container registration_container">
        <form className="needs-validation" novalidate>
          <div className="form-group">
            <label>
              Gender: 
              <input className="form-control" type="text" value={this.state.gender} onChange={this.genderHandleChange} placeholder="Male/Female" required />
              <div className="valid-feedback">Valid.</div>
            </label>
          </div>
          <div className="form-group">
            <label>
              Age: 
              <input className="form-control" type="text" value={this.state.age} onChange={this.ageHandleChange} placeholder="32" required />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Registration;
