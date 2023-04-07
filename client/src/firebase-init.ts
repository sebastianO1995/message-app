import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: 'message-app-c8a04.firebaseapp.com',
  projectId: 'message-app-c8a04',
  storageBucket: 'message-app-c8a04.appspot.com',
  messagingSenderId: '774208386821',
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: 'G-6RFKF48RB0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
