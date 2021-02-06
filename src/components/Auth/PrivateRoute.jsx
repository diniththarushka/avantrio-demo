import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export const authModule = {
    isAuthenticated: false,
    token: "",
    authenticate() {
        this.isAuthenticated = true
    },
    logout() {
        this.isAuthenticated = false
    }
}

/**
 * Customized Route Component to provide authenticated routes with React Router
 * Token management and Auth data are managed in 'authModule'
 */
export const PrivateRoute = ({component: Component, ...props}) => (
    <Route {...props}
           render={(props) => (
               (authModule.isAuthenticated === true && authModule.token) ?
                   <Component {...props}/> :
                   <Redirect to={{
                       pathname: '/',
                       state: {from: props.location}
                   }}/>
           )}
    />
);
