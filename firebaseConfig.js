import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCxUBSQX5SYdOcYXej6bHIperyGUlxTCd8",
    authDomain: "color-patch-1f80f.firebaseapp.com",
    projectId: "color-patch-1f80f",
    storageBucket: "color-patch-1f80f.appspot.com",
    messagingSenderId: "454736975227",
    appId: "1:454736975227:web:547efc35a1102a501f59de",
    measurementId: "G-HLGN8PFYST"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default app;