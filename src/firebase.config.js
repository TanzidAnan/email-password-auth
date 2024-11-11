
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_GUnCyXcRc2MAuffBQrLVb73Ak-Ih_PY",
  authDomain: "email-password-auth-58fa7.firebaseapp.com",
  projectId: "email-password-auth-58fa7",
  storageBucket: "email-password-auth-58fa7.firebasestorage.app",
  messagingSenderId: "451625691133",
  appId: "1:451625691133:web:a38caef83b549b34d89b94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);