import React from 'react';
import fire from './config/Firebase';

import './styles/loginandsignup.scss';

class Login extends React.Component {


    login() {
        const loginEmail = document.querySelector("#login-email").value;
        const loginPassword = document.querySelector("#login-password").value;

        fire.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .then((u) => {
                console.log("Succesfully logged in");
            })
            .catch((err) => {
                console.log("Failed to log in" + err.toString());

            })
    }

    signup() {
        const signupEmail = document.querySelector("#signup-email").value;
        const signupPassword = document.querySelector("#signup-password").value;

        fire.auth().createUserWithEmailAndPassword(signupEmail, signupPassword)
            .then((u) => {
                console.log("Succesfully logged up");
            })
            .catch((err) => {
                console.log("Failed to log in" + err.toString());

            })
    }


    render() {
        return(

            <div className="login-wrapper">

            <nav >
                <div className="logo">
                    React Messenger             
                </div>
            
            </nav>
            
            <div className="login-signup-form-wrapper">

                <p>
                    Please note this application is currently in testing!
                </p>
                
                <div className="login-signup-form">

                <div className="login-form form">
                    <h2>Login</h2>
                    <label htmlFor="email" ><b>Email</b></label> <br/>
                    <input type="email" id="login-email" placeholder="Please enter your email" required/><br/>
                
                    <label htmlFor="password"><b>Password</b></label><br/>
                    <input type="password" id="login-password" name="" placeholder="Please enter your password" required/> <br/>

                    <button onClick={this.login}>Log in</button>
                </div>
                
                <br/>

                <div className="signup-form form" >
                    <h2>Sign up</h2>

                    
                    <label htmlFor="email" ><b>Email</b></label> <br/>
                    <input type="email" id="signup-email" placeholder="Please enter your email" required/><br/>
                
                    <label htmlFor="password"><b>Password</b></label><br/>
                    <input type="password" name="" id="signup-password" placeholder="Please enter your password" required/><br/>
            
                    <button onClick={this.signup}>Sign up</button>
                </div>

                </div>
            </div>

               
            </div>

        );
    }
}

export default Login;