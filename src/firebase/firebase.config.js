// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPK2EZrxzHYWXQi7_-2GpxpuZ2SFZWEAs",
    authDomain: "dragon-news-9ab5d.firebaseapp.com",
    projectId: "dragon-news-9ab5d",
    storageBucket: "dragon-news-9ab5d.appspot.com",
    messagingSenderId: "551683255733",
    appId: "1:551683255733:web:5c98756707f62f2aa1fdfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;