// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLkEzmpjsOxcX58vnGuIRTBYkpp5Nk7BU",
  authDomain: "milestone-9-assignment.firebaseapp.com",
  projectId: "milestone-9-assignment",
  storageBucket: "milestone-9-assignment.appspot.com",
  messagingSenderId: "801118164728",
  appId: "1:801118164728:web:88f4d6904886074d908d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;