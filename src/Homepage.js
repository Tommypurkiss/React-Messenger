import React from 'react'
import fire from './config/Firebase';

import './styles/homepage.scss'

class Homepage extends React.Component {

    // logs  out of  application
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


    searchFriend() {

    }

    addFriend() {

    }

    loadFriendsList() {

    }

    // TODO: FIX THIS
    retrieveDataOnLogin() {

        // retrieve userid
        const userId = fire.auth().currentUser.uid;
        console.log(userId)



        // Get a database reference to our posts
        var db = fire.database();
        var ref = db.ref("users/" + userId + "/username");

        // Attach an asynchronous callback to read the data at our posts reference
        ref.on("value", function(snapshot) {

        let usernameText = document.querySelector('#username');


        usernameText.innerHTML = snapshot.val();
        console.log("username text val is: ", usernameText);

        }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        });

    }







    render() {
        return(
            
            

            <div className="homepage">
                {this.retrieveDataOnLogin()}

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
                            <p>
                                Welcome back, <span id="username"></span> !
                                
                            </p>
                            
                            <button>
                                Settings
                            </button>
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



                {/* Modal */}
                
                

            </div>

        );
    }
}

export default Homepage;