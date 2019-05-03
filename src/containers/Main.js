import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import Landing from '../components/landing/landing';
import About from '../components/about/about';
import Login from '../components/login/login';
import Registration from '../components/registration/registration';
import Main_menu from '../components/main_menu/main_menu';
import Self_assessment from '../components/self_assessment/self_assessment';
import Health_Report from '../components/health_report/health_report';
import Help from '../components/help/help';
import Resiliency_resources from '../components/resiliency_resources/resiliency_resources'

const Main = props => {
    return (
        <div className="main_container">
            <Switch>    
                <Route exact path="/" render={props => <Landing />} />
                <Route path="/about" render={props => <About />} />
                <Route path="/login" render={props => <Login />} />
                <Route path="/registration" render={props => <Registration />} />
                <Route path="/main_menu" render={props => <Main_menu />} />
                <Route path="/self_assessment" render={props => <Self_assessment />} />
                <Route path="/health_Report" render={props => <Health_Report />} />
                <Route path="/help" render={props => <Help />} />
                <Route path="/resiliency_resources" render={props => <Resiliency_resources />} />
            </Switch>
        </div>

    );
};
    
export default withRouter(Main)