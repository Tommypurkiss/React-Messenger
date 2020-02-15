import React from 'react'
import './homepage/homepage-header.scss';
import './homepage/homepage-content.scss';

// import { Link } from 'react-router-dom';

// function Homepage() {
//     return(
//         <div className="homepage-wrapper">
//             <nav className="nav-header">
//             <div className="logo">
//             <Link to="/">
//              React Messenger
//              </Link>
//              {/* <a href="#">React Messenger</a> */}
//             </div>
//             <div className="nav-links">
//                 <ul>
//                  <Link to="/login">
//                  <li>Log In</li>
//                  </Link>

//                  <Link to="/signup">
//                  <li>Sign Up</li>
//                  </Link>


//                  {/* TODO: Fix this className="signup-button" */}
                
//                  {/* <li><a href="#">Log In</a></li>

//                  <li><a href="#" className="signup-button">Sign Up</a></li> */}

//                 </ul>
//             </div>
//             </nav>
//             <div className="homepage-content-wrapper">
//              <p className="fade-up">
//                  A new instant messenger!
//             </p>
//              <p className="fade-up">
//                  Sign Up to start chatting now!
//              </p>
//          </div>
//         </div>
//     );
// }

// export default Homepage;


// import React from 'react';
import fire from './config/Firebase';

class Homepage extends React.Component {

    logout() {
        fire.auth().signOut();
    }


    render() {
        return(

            <div className="homepage">
                <h1>
                    Homepage - chat page
                </h1>
                <button onClick={this.logout}>Sign Out</button>
            </div>

        );
    }
}

export default Homepage;