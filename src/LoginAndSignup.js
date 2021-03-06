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
        const signupUsername = document.querySelector("#signup-username").value;
        const signupEmail = document.querySelector("#signup-email").value;
        const signupPassword = document.querySelector("#signup-password").value;

        fire.auth().createUserWithEmailAndPassword(signupEmail, signupPassword)
            .then((u) => {
                console.log("Succesfully signed up", u);

                var userId = fire.auth().currentUser.uid;

                fire.database().ref("users/" + userId).set({
                    username: signupUsername,
                    email: signupEmail,
                    userid: userId
                    
                })
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

                <div className="login-signup-form">

                    <div className="login-form form">
                        <h2>Login</h2>
                        
                        <div action="" className="login-form-content">

                            <input type="email" id="login-email" placeholder="Email" required/><br/>
                        
                            <input type="password" id="login-password" name="" placeholder="Password" required/> <br/>

                            <button type="submit" onClick={this.login}>Login</button>
                        </div>
                    </div>
                
                <br/>

                    <div className="signup-form form" >
                        <h2>Sign up</h2>
                        <div action="" className="signup-form-content">

                            <input type="text" name="name" id="signup-username" placeholder="Username" required/>  <br/>

                            <input type="email" id="signup-email" placeholder="Email" required/><br/>
                        
                            <input type="password" name="" id="signup-password" placeholder="Password" required/><br/>
                    
                            <input type="password" name="" id="confirm-signup-password" placeholder="Confirm Password" required/><br/>

                            <button onClick={this.signup}>Sign up</button>
                        </div>
                    </div>

                </div>
            </div>

               
            </div>

        );
    }
}

export default Login;