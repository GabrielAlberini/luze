// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfPN_tADSVfIx0lY5yZPlw11OUyzNh8KI",
  authDomain: "portfolio-2022-50c52.firebaseapp.com",
  projectId: "portfolio-2022-50c52",
  storageBucket: "portfolio-2022-50c52.firebasestorage.app",
  messagingSenderId: "891102530589",
  appId: "1:891102530589:web:5ec483fa9fcb1bcde80af4",
  measurementId: "G-99WF4G5ZKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };
export default app;