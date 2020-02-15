// // import React from 'react';
// import './App.scss';

// // Homepage
// import Homepage from './homepage/Homepage';
// // Login page
// import Login from './Login';
// // SignUp Page
// import SignUp from './user-signup/SignUp';
// // Main chat page
// import MainChatPage from './main-chat-page/MainChatPage';

// import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
// import fire from './config/Firebase';
// import React, { Component } from 'react'


// class App extends Component {
//   constructor() {
//     super();
//     this.state = ({
//       user: null,
//     });
//     this.authListener = this.authListener.bind(this);
//   }

//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     fire.auth().onAuthStateChanged((user) => {
//       console.log(user);
//       if (user) {
//         this.setState({ user });
//       } else {
//         this.setState({ user: null });
//       }
//     });
//   }
//   render() {
//     return (

//       // <div className="App">
//       //   {this.state.user ? (<MainChatPage/>) : (<Login/>)}

//       // </div>

      
//     <Router>
//       <div className="App">

//             <Switch>
//               <Route path ="/" exact component={Homepage} />
//               <Route path="/login" component={Login} />
//               <Route path="/signup" component={SignUp} />

//               {/* {this.state.user ? (<MainChatPage />) : (<Homepage/>)} */}
//             </Switch> 

//             {/* {this.state.user ? (<MainChatPage />) : (<Homepage/>)} */}

//           </div>

//     </Router>


        
//     );
// }
// }


// export default App;






import React, { Component } from 'react';
import './App.scss';

import Home from './Homepage.js';
import LoginAndSignUp from './LoginAndSignup.js';

import fire from './config/Firebase';



// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }


class App extends Component {


  constructor(props) {

  
    super(props);
  
    this.state = {
      user: null,
    }
  
    this.authListener = this.authListener.bind(this);
    
  }
  
  componentDidMount() {
    this.authListener();
  }
  
  authListener(){
    fire.auth().onAuthStateChanged(( user ) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null});
      }
    });
  }
  


  render(){
    return(

      // <Login/>

      <div>
        {this.state.user ? (<Home/>) : (<LoginAndSignUp/>)}

      </div>
      




    );
  }
}

export default App;

