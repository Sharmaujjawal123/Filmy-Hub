// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection,addDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAR1JaZnlkh8bGrYeWo0KR7k9hf26doSGI",
  authDomain: "filmyverse-a4a7a.firebaseapp.com",
  projectId: "filmyverse-a4a7a",
  storageBucket: "filmyverse-a4a7a.firebasestorage.app",
  messagingSenderId: "621115941385",
  appId: "1:621115941385:web:25dd6d42c02f61b6bdced8",
  measurementId: "G-XBV2RQPCKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const moviesCollection=collection(db,"movies");
export default app;