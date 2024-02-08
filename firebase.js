// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk3PldXxPHbvrPIvJtIbpoypnGbzdk4S0",
  authDomain: "todo-dae6f.firebaseapp.com",
  projectId: "todo-dae6f",
  storageBucket: "todo-dae6f.appspot.com",
  messagingSenderId: "301438595501",
  appId: "1:301438595501:web:d0ab19013128110541b124",
  measurementId: "G-KLS1CT58NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);