// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeyP0ajQPn9euEUJCQEucz_iPxte9HcYw",
  authDomain: "start-vue-firebase.firebaseapp.com",
  projectId: "start-vue-firebase",
  storageBucket: "start-vue-firebase.appspot.com",
  messagingSenderId: "455594024963",
  appId: "1:455594024963:web:d8456c000956e41e23ae36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}