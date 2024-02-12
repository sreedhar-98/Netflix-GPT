// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApRyznzyA_dkoMWuCJfdoUFfO4d1Zsxxk",
  authDomain: "ott-platform-d5cf6.firebaseapp.com",
  projectId: "ott-platform-d5cf6",
  storageBucket: "ott-platform-d5cf6.appspot.com",
  messagingSenderId: "527637786553",
  appId: "1:527637786553:web:69832bf95b8c772a269068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()