import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyAGbpsrroOfgXuV8FlLcN7rRmybHi2267E",
    authDomain: "icsc-traders.firebaseapp.com",
    databaseURL: "https://icsc-traders.firebaseio.com",
    projectId: "icsc-traders",
    storageBucket: "icsc-traders.appspot.com",
    messagingSenderId: "169902995767",
    appId: "1:169902995767:web:56aa59e45776986f2f82b2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;