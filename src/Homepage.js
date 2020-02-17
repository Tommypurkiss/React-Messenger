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

        // retieve username
        const userId = fire.auth().currentUser.uid;
        console.log(userId)

        // const snapshot = fire.database().ref('users/' + userId).once('value');
        // console.log("snapshot is: ", snapshot) //returns a promise?
        
        // let userText = document.querySelector('#username');

        // userText.innerHTML = snapshot.val()



        // snapshot.on("value", function(snapshot) {
        //     console.log(snapshot.val());
        //   }, function (errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        //   });
          

        // returns full db link?
        var starCountRef = fire.database().ref('posts/' + userId + '/username');
        starCountRef.on('value', function(snapshot) {
        // updateStarCount(postElement, snapshot.val());
        console.log(starCountRef.toString())

        let userText = document.querySelector('#username');

        userText.innerHTML = starCountRef
        });




// Write and then read back a string from the Database.
// ref.set("hello")
//   .then(function() {
//     return ref.once("value");
//   })
//   .then(function(snapshot) {
//     var data = snapshot.val(); // data === "hello"
//   });


// Write and then read back a JavaScript object from the Database.
// ref.set({ name: "Ada", age: 36 })
//   .then(function() {
//    return ref.once("value");
//   })
//   .then(function(snapshot) {
//     var data = snapshot.val();
//     // data is { "name": "Ada", "age": 36 }
//     // data.name === "Ada"
//     // data.age === 36
//   });


        // const snapshot = fire.database().ref('/users/' + userId).once('value');
        // // + '/email'
        // console.log("snapshot is: ", snapshot.value);
        // let user = document.getElementById("username");
        // var user = (snapshot.val().username);

        // console.log("user is: ", user);
        // user.innerHTML = (snapshot.val() && snapshot.val().username) || 'Anonymous';

        // var admin = require("firebase-admin");

        // // Get a database reference to our posts
        // var db = admin.database();
        // var ref = db.ref("/users/" + userId + "/username");

        // ref.on("value", function(snapshot) {
        //     console.log(snapshot.val());
        //   }, function (errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        //   });
    }


    // {this.retrieveDataOnLogin}





    render() {
        return(
            
            

            <div className="homepage">
                {/* {this.retrieveDataOnLogin().bind(this)} */}
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
                                Welcome back, <span id="username"></span>!
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