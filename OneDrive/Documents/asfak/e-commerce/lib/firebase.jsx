// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBJIiOQBGtDN77dUT8WDw7taiTvITJDFBw",
  authDomain: "e-commerce-1093a.firebaseapp.com",
  projectId: "e-commerce-1093a",
  storageBucket: "e-commerce-1093a.firebasestorage.app",
  messagingSenderId: "807996392545",
  appId: "1:807996392545:web:59561eab34d240dffa9620",
  measurementId: "G-Q7TC1FDWDD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
