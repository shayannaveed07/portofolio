import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtvgwYCfKD79-vzR6nUTrcrwnZmuu2PsA",
  authDomain: "portfolio-83ae2.firebaseapp.com",
  projectId: "portfolio-83ae2",
  storageBucket: "portfolio-83ae2.appspot.com",
  messagingSenderId: "896748757163",
  appId: "1:896748757163:web:e793fcddfe6c9ff0f657ee",
  measurementId: "G-Q8GR05P44W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);