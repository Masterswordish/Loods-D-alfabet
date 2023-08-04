// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCka-d91p6NPDv0_BezTsqgo-t-QiJ1dh4",
  authDomain: "fireship-course-9d26a.firebaseapp.com",
  projectId: "fireship-course-9d26a",
  storageBucket: "fireship-course-9d26a.appspot.com",
  messagingSenderId: "531167327993",
  appId: "1:531167327993:web:708a26d5cc8576c50f9428",
  measurementId: "G-9KQ85NC4E2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
