import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQEjNKaMwr5irqJRJ7RqJVO_4Zcz7d5Mw",
  authDomain: "greenshop-5aa3d.firebaseapp.com",
  projectId: "greenshop-5aa3d",
  storageBucket: "greenshop-5aa3d.appspot.com",
  messagingSenderId: "689847212960",
  appId: "1:689847212960:web:35c16f2c224ee717cea2c5",
  measurementId: "G-XWC7B6FF88",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export { signInWithGoogle };
