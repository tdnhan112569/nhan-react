import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAP6yGxbxWd8KadGoJLvrnCoxjZcGFVt-g",
    authDomain: "nhan-react.firebaseapp.com",
    databaseURL: "https://nhan-react.firebaseio.com",
    projectId: "nhan-react",
    storageBucket: "",
    messagingSenderId: "265780522326",
    appId: "1:265780522326:web:3cca0bce4ab77a7f377af7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp    

