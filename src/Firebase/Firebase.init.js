// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkBFCOmthKsf7z1PG3YmCCVfT4g9_Y0nQ",
  authDomain: "dragon-news-project-e556e.firebaseapp.com",
  projectId: "dragon-news-project-e556e",
  storageBucket: "dragon-news-project-e556e.firebasestorage.app",
  messagingSenderId: "926101571574",
  appId: "1:926101571574:web:820132b6248809b60729d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);