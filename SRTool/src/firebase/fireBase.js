import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//initialize firebase

// i'll see you in bit need to have break

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, db, app, auth };
