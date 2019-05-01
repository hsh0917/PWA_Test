import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


class Login extends Component {
  render() {
    return (
      <div className="login_container">
        <div className="login_centered">
          <h1>TOH Resiliency App</h1>
          <Link to="/main_menu" className="btn btn-primary">
            Get help right now
          </Link>
          <h3>or</h3>
          <h3>Login</h3>
              <button className="btn btn-primary"><FontAwesomeIcon icon={faFacebookSquare} style={{color: 'white'}} size="2x"/> Login with Facebook</button>
              <button className="btn btn-danger"><FontAwesomeIcon icon={faGooglePlusSquare} style={{color: 'white'}} size="2x"/> Login with Google</button>
              <button className="btn btn-info"><FontAwesomeIcon icon={faTwitterSquare} style={{color: 'white'}} size="2x"/> Login with Twitter</button>
              <button className="btn btn-warning"><FontAwesomeIcon icon={faLinkedin} style={{color: 'white'}} size="2x"/> Login with LinkdIn</button>
        </div>
      </div>
    );
  }
}

export default Login;
