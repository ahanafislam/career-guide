// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DXmm-YOMXwKkzpXSe_q2UZovbdri1sk",
  authDomain: "career-guide-607f1.firebaseapp.com",
  projectId: "career-guide-607f1",
  storageBucket: "career-guide-607f1.appspot.com",
  messagingSenderId: "779819470526",
  appId: "1:779819470526:web:87c9c8eebc19103b9318ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
