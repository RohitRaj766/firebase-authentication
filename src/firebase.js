
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr1VvDCzaahrPbhGeX2mAbCvQAyFy9T68",
  authDomain: "authentication-baaf4.firebaseapp.com",
  projectId: "authentication-baaf4",
  storageBucket: "authentication-baaf4.appspot.com",
  messagingSenderId: "1095533691183",
  appId: "1:1095533691183:web:719cc366273438aa81a1da"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup };
