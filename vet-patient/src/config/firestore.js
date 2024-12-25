// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAq2BtTjPLi87MxEYkiKVZ4e4VD-_RrwNE",
//     authDomain: "veterinary-clinic-database.firebaseapp.com",
//     projectId: "veterinary-clinic-database",
//     storageBucket: "veterinary-clinic-database.firebasestorage.app",
//     messagingSenderId: "497616508198",
//     appId: "1:497616508198:web:eec296b0613255f4bb1de7",
//     measurementId: "G-T1H01MJN14"
// };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 const db = getFirestore(app);

 const projectId = getFirestore(app);

//export const db = getFirestore(app);

export { db, projectId } 
