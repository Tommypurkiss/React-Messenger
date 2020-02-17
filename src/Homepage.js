import React from 'react'
import fire from './config/Firebase';

import './styles/homepage.scss'

class Homepage extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.listAllUsers = this.listAllUsers.bind(this);
    // }

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







    // listAllUsers(nextPageToken) {
    //     // List batch of users, 1000 at a time.
    //     fire.auth().listUsers(1000, nextPageToken)
    //       .then(function(listUsersResult) {
    //         listUsersResult.users.forEach(function(userRecord) {
    //           console.log('user', userRecord.toJSON());
    //         });
    //         if (listUsersResult.pageToken) {
    //           // List next batch of users.
    //           listAllUsers(listUsersResult.pageToken);
    //         }
    //       })
    //       .catch(function(error) {
    //         console.log('Error listing users:', error);
    //       });
    //   }
    //   Start listing users from the beginning, 1000 at a time.
    //   listAllUsers();




    // search friend button 
    searchFriend() {
        // look through db users and add them to a list or array
        // list or array will then display each user below the search bar ul creating an li for each user
        // next to a user maybe have an add friend plus button which will send a friend request?
        // searched firends is = database returning the users 
        
        console.log("hello")

        // database here

        // const allUserIds = fire.auth().currentUser.uid;
        // const allUserIds = fire.auth().listUsers().uid;

        // console.log(allUserIds)

        // var db = fire.database();
        // var ref = db.ref("users/" + allUserIds + "/username");


        // const searchedFriends = document.querySelector('ul-searched-friends');
        // this.listAllUsers();
        

    }

    addFriendModal() {

        // Get the modal
        var modal = document.getElementById("myModal");


        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // sets modal style 
        modal.style.display = "block";
        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function(event) {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

        
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
                {/* {this.listAllUsers()} */}

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
                            <button id="addFriendModalBtn" onClick={this.addFriendModal}>
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


                    {/* Modal */}
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Some text in the Modal..</p>
                            <div>
                                <input type="text" name="searchbar" id="searchbar" placeholder="Search"/>
                                    <button >Search</button>
                                <ul id="ul-searched-friends">

                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>



                
                

            </div>

        );
    }
}

export default Homepage;