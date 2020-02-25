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




    // listAllUsers(){
        
    // }





    // search friend button 
    searchFriend() {
        // look through db users and add them to a list or array
        // list or array will then display each user below the search bar ul creating an li for each user
        // next to a user maybe have an add friend plus button which will send a friend request?
        // searched firends is = database returning the users 
        
        // Variables
        let searchedFriendUsername = "AngryTh0mas" // pretend this is a user in db
        let searchbarText = document.getElementById('searchbar');
        let ulSearchedFriends = document.getElementById('ul-searched-friends');
        let showFriendLi = document.createElement("li");


        // test both uid
        // var testUid = ["GGzDPRNquKZGSdSlx1IU2BRhPEI3", "ueyYgjPNXwgZjhc9VytQ1kMF9zh2"];
        // var testUid = {
        //     GGzDPRNquKZGSdSlx1IU2BRhPEI3: {
        //         username: "Tommy Purkiss"
        //     },
            
        //     ueyYgjPNXwgZjhc9VytQ1kMF9zh2: {
        //         username: "new user"
        //     }
        // }



        // var mappedUid = testUid.map((oneuid) => oneuid);
        // testUid.forEach(item => console.log(item));


        // const uid = "ueyYgjPNXwgZjhc9VytQ1kMF9zh2"
        // var db = fire.database();

        // var ref = db.ref("users/" + uid + "/username");
        // var ref = db.ref("users/" + mappedUid + "/username");
        // var ref = db.ref("/users/").orderByChild("username").equalTo(searchbarText);

        // var ref = db.ref("users/" + uid + "/username");
        // var ref = db.ref(listAllUsers());
        // var ref = db.ref("users/").orderByChild("username");
        // console.log("ref value is: ", ref)




        // function* searchUsers(action) {
            // const database = fire.database();
            // const ref = database.ref('users/' + testUid).orderByChild("username").equalTo(searchbarText);
            // try {
            //     console.log('about to fetch filters users');
            //     // ref.orderByChild(mappedUid);
            //     // const query = ref.orderByChild('username').startAt(action.searchText).endAt(action.searchText + "\uf8ff");
            //     // const query = ref.orderByChild('username').startAt(action.searchText.charAt(0));

            //     // const snapshot = yield call([query, query.once], 'value');
            //     // const snapshot = yield call([query, query.once], 'value');
                
            //     // snapshot.forEach(function(child) { 
            //     // console.log(child.key, child.val().username);
            //     // });
            //     // console.log('done fetching users');
            //     // console.log(snapshot);


            //     ref.on("value", function(snapshot) {

            //         let value = snapshot.val();
                    
            //         console.log("value is: ", value);
        
        
            //         if (searchbarText.value === value) {
            //             console.log("true")
            
            //             // showFriendLi.innerHTML = searchbarText.value;
            //             showFriendLi.innerHTML = value;
            
            //             ulSearchedFriends.appendChild(showFriendLi);
            
            //         }
            //         else if (searchbarText.value !== value) {
            //             showFriendLi.innerHTML = "no friends found"
            //             ulSearchedFriends.appendChild(showFriendLi);
            //         }
            //         }, function (errorObject) {
            //         console.log("The read failed: " + errorObject.code);
            //         });
            
            // }
            // catch(error){
            //     console.log(error);
            // }
        // }
        // searchUsers()



        

        // // let value = ""
        // ref.on("value", function(snapshot) {

        //     let value = snapshot.val();
            
        //     console.log("snapshot value is: ", value);


        //     if (searchbarText.value === value) {
        //         console.log("true")
    
        //         // showFriendLi.innerHTML = searchbarText.value;
        //         showFriendLi.innerHTML = value;
    
        //         ulSearchedFriends.appendChild(showFriendLi);
    
        //     }
        //     else if (searchbarText.value !== value) {
        //         showFriendLi.innerHTML = "no friends found"
        //         ulSearchedFriends.appendChild(showFriendLi);
        //     }

 
    

        //     }, function (errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        //     });
    
            
            


        // if (searchbarText.value === value) {
        //     console.log("true")

        //     // showFriendLi.innerHTML = searchbarText;
        //     // showFriendLi.innerHTML = value;

        //     // ulSearchedFriends.appendChild(showFriendLi);

        // } else {
        //     showFriendLi.innerHTML = "no friends found"
        //     ulSearchedFriends.appendChild(showFriendLi);

        // }
        



          
    }

    

    addFriendModal() {
        
        // search bar
        let searchbarText = document.getElementById('searchbar');
        // serached friends li
        let ulSearchedFriends = document.getElementById('ul-searched-friends');

        

        // Get the modal
        var modal = document.getElementById("myModal");


        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // sets modal style 
        modal.style.display = "block";
        

        // When the user clicks on <span> (x), close the modal
        span.onclick = function(event) {
            modal.style.display = "none";
            searchbarText.value = "";
            ulSearchedFriends.innerHTML = "";
        }

        // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        //     if (event.target === modal) {
        //         modal.style.display = "none";
        //     }
        // }



        
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
        usernameText.innerHTML = snapshot.val(); // TODO: there was a problem with logging in and innerhtml
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
                            <div>
                                <p>
                                    Welcome back, <span id="username"></span>!
                                </p>
                            </div>
                            <div>
                                <button>
                                Settings
                            </button>
                            <button id="addFriendModalBtn" onClick={this.addFriendModal}>
                                Add Friend
                            </button>
                            </div>
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
                                    <button id="search-friend-btn" onClick={this.searchFriend} >Search</button>
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