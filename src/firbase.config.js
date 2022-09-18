import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRsUhKIYW_og0TxmgcljryGlBwo-TBJAM",
  authDomain: "home-marketplace-app-30604.firebaseapp.com",
  projectId: "home-marketplace-app-30604",
  storageBucket: "home-marketplace-app-30604.appspot.com",
  messagingSenderId: "871734811031",
  appId: "1:871734811031:web:e2898a7ecf8f41bd140cd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
