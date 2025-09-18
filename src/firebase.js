// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDQcFsEbDiTqJuB6hbsiRRaqhKYZmnVlAw",
  authDomain: "fsspvn-0012.firebaseapp.com",
  projectId: "fsspvn-0012",
  storageBucket: "fsspvn-0012.firebasestorage.app",
  messagingSenderId: "366748780047",
  appId: "1:366748780047:web:eb615c1266b2abf55c857a",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);