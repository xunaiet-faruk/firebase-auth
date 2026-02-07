// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyK4NyvKiF2bmnevsKZQK9cPEkJEuigRk",
    authDomain: "fir-auth-c3bcb.firebaseapp.com",
    projectId: "fir-auth-c3bcb",
    storageBucket: "fir-auth-c3bcb.firebasestorage.app",
    messagingSenderId: "217237787750",
    appId: "1:217237787750:web:729c48d8bf1ffe5b6489a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);