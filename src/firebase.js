// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvpCJZIUmM8KA3Q8hn5bRieWhCqV8T-7o",
  authDomain: "project-intern-3a4df.firebaseapp.com",
  databaseURL: "https://project-intern-3a4df-default-rtdb.firebaseio.com",
  projectId: "project-intern-3a4df",
  storageBucket: "project-intern-3a4df.appspot.com",
  messagingSenderId: "55223547760",
  appId: "1:55223547760:web:34cba7c5d38d8994f601b5",
  measurementId: "G-P66LZ4P2EG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
