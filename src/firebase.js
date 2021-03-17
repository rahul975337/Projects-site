import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
var firebaseApp;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZCFw3Br2LQCdjGJVW8HBtLjv-GsqDGZk",
  authDomain: "projects-52c5d.firebaseapp.com",
  projectId: "projects-52c5d",
  storageBucket: "projects-52c5d.appspot.com",
  messagingSenderId: "58928000937",
  appId: "1:58928000937:web:3ce8398e527fa06f0adeb8",
  measurementId: "G-NBYG9KN4CW",
};
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else firebase.app();
const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
// const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// ////

export { provider, projectStorage };
export default projectFirestore;
