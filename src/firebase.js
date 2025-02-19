import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const ENVAR = import.meta.env;

const apiKey = ENVAR.VITE_API_KEY;
const authDomain = ENVAR.VITE_AUTH_DOMAIN;
const projectId = ENVAR.VITE_PROJECT_ID;
const storageBucket = ENVAR.VITE_STORAGE_BUCKET;
const messagingSenderId = ENVAR.VITE_MESSAGING_SENDER_ID;
const appId = ENVAR.VITE_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
