import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "react-dotenv";

dotenv.config();

const apiKey = dotenv.API_KEY;
const authDomain = dotenv.AUTH_DOMAIN;
const projectId = dotenv.PROJECT_ID;
const storageBucket = dotenv.STORAGE_BUCKET;
const messagingSenderId = dotenv.MESSAGING_SENDER_ID;
const appId = dotenv.APP_ID;

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
