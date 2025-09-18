// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_APIKEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const prjId = import.meta.env.VITE_PRJID;
const storageBucket = import.meta.env.VITE_STRORAGE_BUCKET;
const msgSenderId = import.meta.env.VITE_MSG_SENDERID;
const appId = import.meta.env.VITE_APPID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: prjId,
  storageBucket: storageBucket,
  messagingSenderId: msgSenderId,
  appId: appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);