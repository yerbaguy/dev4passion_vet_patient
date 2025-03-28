// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq2BtTjPLi87MxEYkiKVZ4e4VD-_RrwNE",
    authDomain: "veterinary-clinic-database.firebaseapp.com",
    projectId: "veterinary-clinic-database",
    storageBucket: "veterinary-clinic-database.firebasestorage.app",
    messagingSenderId: "497616508198",
    appId: "1:497616508198:web:eec296b0613255f4bb1de7",
    measurementId: "G-T1H01MJN14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }