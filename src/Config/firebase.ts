import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJs5BARoh5l4Rty_MvIS1ZPgQKnTRP8CY",
  authDomain: "react-ionic-36ea3.firebaseapp.com",
  projectId: "react-ionic-36ea3",
  storageBucket: "react-ionic-36ea3.appspot.com",
  messagingSenderId: "774037631985",
  appId: "1:774037631985:web:8718e1f62850e1cbcf4a50"
};

firebase.initializeApp(firebaseConfig)

// firebase.performance();
// firebase.analytics()

export default firebase
