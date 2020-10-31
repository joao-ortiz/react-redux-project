import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAeBhSg8CRHfJeV5JLcAKwqAH0tZKNoZfQ",
    authDomain: "react-redux-plans.firebaseapp.com",
    databaseURL: "https://react-redux-plans.firebaseio.com",
    projectId: "react-redux-plans",
    storageBucket: "react-redux-plans.appspot.com",
    messagingSenderId: "514313061043",
    appId: "1:514313061043:web:fd9dbe2d6c841e654de6c6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase