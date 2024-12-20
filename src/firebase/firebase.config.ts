// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6oTUKSvuMiOvQfpQyiF1X_uaReEIeMa4",
  authDomain: "ro-off-website.firebaseapp.com",
  projectId: "ro-off-website",
  storageBucket: "ro-off-website.firebasestorage.app",
  messagingSenderId: "697033622916",
  appId: "1:697033622916:web:ba920f647e945d7b9809d1",
  measurementId: "G-Z2VQX1FVQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
