// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMDea-jMw1TaSJflgc7H-L7ULBpOET1Lk",
  authDomain: "ema-john-with-firebase-a-a7e0f.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-a7e0f",
  storageBucket: "ema-john-with-firebase-a-a7e0f.appspot.com",
  messagingSenderId: "628906670835",
  appId: "1:628906670835:web:b53eca43a7f05817681586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;