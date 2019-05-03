import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Navbar from '../../containers/navbar/navbar';

import './self_assessment';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinBeam} from '@fortawesome/free-regular-svg-icons';
import { faMeh} from '@fortawesome/free-regular-svg-icons';
import { faFrown} from '@fortawesome/free-regular-svg-icons';



class Self_assessment extends Component {
  
  submitForm (e) {
		e.preventDefault()
		this.props.history.push('/health_Report');
	}

  render() {
    return (
      <div>
        <Navbar />
      <div className="container selfAssessment_container">
        <form className="needs-validation" novalidate onSubmit={this.submitForm.bind(this)}>
          <div className="form-group">
            <h2 className="mb-4">How are you today?</h2>
            <div>
            <FontAwesomeIcon icon={faFrown} style={{color: 'red'}}size="2x"/><FontAwesomeIcon icon={faMeh} size="2x" /><FontAwesomeIcon icon={faGrinBeam} style={{color:'green'}} size="2x" />
            </div>
            <div className="row">
              <div className="col-3"><label>Gratitude</label></div>
              <div className="col-9"><Slider dots step={20} defaultValue={0} /></div>
            </div>
            <div className="row">
            <div className="col-3"><label>Health</label></div>
              <div className="col-9"><Slider dots step={20} defaultValue={0} /></div>
            </div>
            <div className="row">
              <div className="col-3"><label>Sleep</label></div>
              <div className="col-9"><Slider dots step={20} defaultValue={0} /></div>
            </div>
            <div className="row">
              <div className="col-3"><label>Mood</label></div>
              <div className="col-9"><Slider dots step={20} defaultValue={0} /></div>
            </div>
            <div className="row">
              <div className="col-3"><label>Anxiety</label></div>
              <div className="col-9"><Slider dots step={20} defaultValue={0} /></div>
            </div>
            <div className="row">
              <div className="col-3"><label>Nutrition</label></div>
              <div className="col-9"><Slider dots step={20} defaultValue={0} /></div>
            </div>
            <div className="row">
              <div className="col-3"><label>Physical Symptoms</label></div>
              <div className="col-9 last"><Slider dots step={20} defaultValue={0} /></div>
            </div>
            <div className="mt-5">
              <label for="comment">Notes (optional)</label>
              <textarea class="form-control" rows="3" id="comment"></textarea>
            </div>
            <div className="mt-3 selfAssessment_submit">
              <input type="submit"/>
            </div>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(Self_assessment);
