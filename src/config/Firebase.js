import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDr49R81Q74sTYc9HdF_PLW5116YKh6bZ0",
    authDomain: "react-messenger-8bcdd.firebaseapp.com",
    databaseURL: "https://react-messenger-8bcdd.firebaseio.com",
    projectId: "react-messenger-8bcdd",
    storageBucket: "react-messenger-8bcdd.appspot.com",
    messagingSenderId: "126560753313",
    appId: "1:126560753313:web:feb9978033a7fab37202e0",
    measurementId: "G-SJS0P79EZ3"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;