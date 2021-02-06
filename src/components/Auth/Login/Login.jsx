import React, {Component} from 'react';
import axios from "axios";
import PadLockIcon from "./assets/icons/padlock.svg";
import UserIcon from "./assets/icons/user.svg";
import {authModule} from "../PrivateRoute";
import "./login.styles.css";

/**
 * Simple Login component for Authentication
 * Happens with PrivateRoute Component
 */
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUsername = (e) => {
        this.setState(() => {
            return {username: e.target.value}
        })
    }

    onChangePassword = (e) => {
        this.setState(() => {
            return {password: e.target.value}
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.username && this.state.password) {
            axios.post("http://apps.avantrio.xyz:8010/api/user/login", {
                username: this.state.username,
                password: this.state.password
            })
                .then((res) => {
                    authModule.token = res.data.token;
                    authModule.authenticate();
                    this.props.history.push('/dashboard');
                }).catch((err) => {
                alert("Invalid Credentials, Error: " + err.toString());
            });
        } else
            alert('Please provide both username and the password');
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row justify-content-center">
                    <div className="col-md-5 bg-light justify-content-center rounded p-3 shadow mb-5">
                        <h3 className="title text-center">LOGIN</h3>
                        <p className="normal text-center mt-3">Please provide your credentials to Sign-in.</p>
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <div className="textfeild">
                                    <img className="align-middle" src={UserIcon} height={25}
                                         alt="Username icon"/>
                                    <input className="login-input" onChange={this.onChangeUsername} type="text"
                                           placeholder="Username"/>
                                </div>
                                <div className="textfeild">
                                    <img className="align-middle" src={PadLockIcon} height={25}
                                         alt="Username icon"/>
                                    <input className="login-input" onChange={this.onChangePassword} type="password"
                                           placeholder="Password"/>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-4 pb-3">
                                <button className="loginBtn">LOGIN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
