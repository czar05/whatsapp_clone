// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYcfbI5xchj8EdqS5MXK1VYrAE1vGG1JQ",
  authDomain: "whats-app-9d707.firebaseapp.com",
  projectId: "whats-app-9d707",
  storageBucket: "whats-app-9d707.appspot.com",
  messagingSenderId: "391381886699",
  appId: "1:391381886699:web:805003ac25beaa29cb40ae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;