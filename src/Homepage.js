import React from 'react'

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
//             </div>f
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

import './styles/homepage.scss'

class Homepage extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    
    
    sendMessage() {

        const messages = document.getElementById("ul-messages");
        const textbox = document.getElementById("textbox");

        const newMessage = document.createElement("li");
        newMessage.innerHTML = textbox.value;
        messages.appendChild(newMessage);
        textbox.value = "";
    }

    addFriend() {

    }

    render() {
        return(

            <div className="homepage">
                <nav>
                    <div className="logo">
                        React Messenger             
                    </div>
                    <div className="signout">
                        <button onClick={this.logout}>Sign Out</button>
                    </div>

                </nav>
                <div className="homepage-main-content">
                    
                    <div className="side-menu-wrapper">
                        
                        <div className="side-menu-top">
                            <button>
                                Add Friend
                            </button>
                        </div>
                        <div className="friends-chats">
                            <h3>
                                Friends and Chats
                            </h3>
                            <div className="friends-chat-list">
                                <ul>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="chat-wrapper">
                        <h3>
                            CHAT
                        </h3>
                        <div className="chat-log">
                            <ul className="ul-messages" id="ul-messages">

                            </ul>
                        </div>
                        <div className="chat-text">
                            <input type="text" className="textbox" id="textbox"/>
                            <button className="send-button" id="send-button" onClick={this.sendMessage}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Homepage;