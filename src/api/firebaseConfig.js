
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZCiCIFoCgw3RCDnFh0qI9mBy9HVrnDYQ",
  authDomain: "softwareengineers-50d87.firebaseapp.com",
  projectId: "softwareengineers-50d87",
  storageBucket: "softwareengineers-50d87.appspot.com",
  messagingSenderId: "518294990831",
  appId: "1:518294990831:web:8348afed86b3f08ed8901a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();