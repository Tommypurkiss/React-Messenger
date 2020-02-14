import React from 'react';
import './homepage-header.scss';
 
import { Link } from 'react-router-dom';


function HomepageHeader() {


    return(

        <nav className="nav-header">
            <div className="logo">
                <Link to="/">
                React Messenger
                </Link>
                {/* <a href="#">React Messenger</a> */}
            </div>
            <div className="nav-links">
                <ul>
                    <Link to="">
                    <li>Log In</li>
                    </Link>
                    <Link to="/signup">
                    <li>Sign Up</li>
                    </Link>
                    {/* TODO: Fix this className="signup-button" */}
                    
                    {/* <li><a href="#">Log In</a></li>

                    <li><a href="#" className="signup-button">Sign Up</a></li> */}

                </ul>
            </div>
        </nav>



    );
}

export default HomepageHeader;

