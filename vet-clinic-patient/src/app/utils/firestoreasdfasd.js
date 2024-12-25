// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
//import { getFirestore, doc, setDoc } from "firebase/firestore";
//import { getStorage, ref } from "firebase/storage";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    //storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    storageBucket:"gs://veterinary-clinic-database.firebasestorage.app",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = getApp();

const db = getFirestore(app);

//const storage = getStorage(); here
const storage = getStorage(app);


const storagee = getStorage(firebaseApp, "gs://veterinary-clinic-database.firebasestorage.app");

//const storageRef = ref(storage);

const imageRef = ref(storage, '/Users/bartosz/Downloads/bg.jpeg');



//export { db, getFirestore }
//export { db } was here

//export { db, storage, storageRef }
//export { db } //here
export default { db, storage, storagee, ref, getDownloadURL }
//export { db, storage, storagee, ref, getDownloadURL, doc, setDoc }
//export { db, getStorage, ref, uploadBytesResumable, getDownloadURL }