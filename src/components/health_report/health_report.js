import React, { Component } from 'react';
import './health_report';
import SimpleLineChart from './report_chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinBeam} from '@fortawesome/free-regular-svg-icons';
import { faMeh} from '@fortawesome/free-regular-svg-icons';
import { faFrown} from '@fortawesome/free-regular-svg-icons';

import Navbar from '../../containers/navbar/navbar';

class HealthReport extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <div className="container healthReport_container">
          <h2>Your Health Report</h2>
          
          <div className="healthReport_chart">
            <h4>Six month overview</h4>
            <span className="healthchart_icon_happy"><FontAwesomeIcon icon={faGrinBeam} style={{color: 'green'}} size="2x"/></span>
            <span className="healthchart_icon_sad"><FontAwesomeIcon icon={faFrown} style={{color: 'red'}} size="2x"/></span>
            <SimpleLineChart />
          </div>
          <div>
            <h4>Achievenments</h4>
            
          </div>
          <div>
            <h4>Recommendations</h4>
            
          </div>
    </div>
    </div>
    );
  }
}

export default HealthReport;
