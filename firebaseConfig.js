import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCT0DYq9HxNgrIusxv7k8NP_lKgQMDfTds",
    authDomain: "resrcle-portal-review.firebaseapp.com",
    databaseURL: "https://resrcle-portal-review-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "resrcle-portal-review",
    storageBucket: "resrcle-portal-review.appspot.com",
    messagingSenderId: "451552606172",
    appId: "1:451552606172:web:1510d014e4cb16dff90119"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default app;