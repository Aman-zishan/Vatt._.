import firebase from 'firebase';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCq6Ai-bbwdFDmfHFkczr_-6vBoT9HfCC4",
    authDomain: "chatty-2505a.firebaseapp.com",
    databaseURL: "https://chatty-2505a.firebaseio.com",
    projectId: "chatty-2505a",
    storageBucket: "chatty-2505a.appspot.com",
    messagingSenderId: "521812399823",
    appId: "1:521812399823:web:8b31f832944ba4b89c89ba",
    measurementId: "G-P94J8W2DZ9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth;
export const db = firebase.database();