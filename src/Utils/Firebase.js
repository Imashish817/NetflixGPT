// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7HOF7G0QPvWiiZslaK83n95CSeiK3fWQ",
  authDomain: "netflixgpt-b8453.firebaseapp.com",
  projectId: "netflixgpt-b8453",
  storageBucket: "netflixgpt-b8453.appspot.com",
  messagingSenderId: "87618744472",
  appId: "1:87618744472:web:3f15ca7fcbbde6af48e0ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();