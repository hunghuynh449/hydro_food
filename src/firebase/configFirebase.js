import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHRAG73DhFOMN-oU8_V2yqBXMNWslPsjM",
  authDomain: "hunggia-ab37a.firebaseapp.com",
  projectId: "hunggia-ab37a",
  storageBucket: "hunggia-ab37a.appspot.com",
  messagingSenderId: "1055614048322",
  appId: "1:1055614048322:web:089898b848b9823130f5db",
  measurementId: "G-6NBBZ7RPY2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    console.log("ERROR: ", err);
    throw err;
  }
};

export const signInWithFacebook = async () => {
  try {
    const res = await signInWithPopup(auth, facebookProvider);
    return res;
  } catch (err) {
    console.log("ERROR: ", err);
    throw err;
  }
};

export default firebaseConfig;
