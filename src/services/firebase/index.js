import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfJrzjim-nOmJNp-9B-E6DczuBs-zCsTI",
  authDomain: "allfit-490fd.firebaseapp.com",
  projectId: "allfit-490fd",
  storageBucket: "allfit-490fd.appspot.com",
  messagingSenderId: "321741020338",
  appId: "1:321741020338:web:93fb5228e92ee344133dab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get my data base
export const firestoreDataBase = getFirestore(app);