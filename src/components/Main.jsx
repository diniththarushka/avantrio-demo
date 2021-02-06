import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {PrivateRoute} from "./Auth/PrivateRoute";
import Login from "./Auth/Login/Login";
import Dashboard from "./Dashboard/Dashboard";

/**
 * Main entry point for the Application
 * Routing management is done here
 *
 * '/' - root - Used for Logging in
 * '/dashboard' - Dashboard URI - Used for Functionalities (Authenticated/ Protected Route)
 */

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path={'/'} component={Login}/>
                    <PrivateRoute path={'/dashboard'} component={Dashboard}/>
                </Switch>
            </Router>
        )
    }
}
