import React, { Component } from 'react';
import { HashRouter as Router } from "react-router-dom";


import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Main from './Main'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinBeam, faMeh, faFrown } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';



library.add(faGrinBeam, faMeh, faFrown, faFacebook)



class App extends Component {
  
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
