import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDyHN9ZTB_dUG3ixgv4-W8L47xYagIPeBQ",
  authDomain: "faceattend-e13e2.firebaseapp.com",
  projectId: "faceattend-e13e2",
  storageBucket: "faceattend-e13e2.firebasestorage.app",
  messagingSenderId: "190444851040",
  appId: "1:190444851040:web:3b0abf464532dcb927d805"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app);

export { db };
