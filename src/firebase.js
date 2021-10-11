// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANSi8cU5SF2VJTbHI3iqDSU9Ydjc16x4k",
  authDomain: "snap-chat-clone-projet.firebaseapp.com",
  projectId: "snap-chat-clone-projet",
  storageBucket: "snap-chat-clone-projet.appspot.com",
  messagingSenderId: "108164056870",
  appId: "1:108164056870:web:2651cd3435ff40b79f63e7",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore;
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();


