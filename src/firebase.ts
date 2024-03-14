import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6ux_3CQFPp71cZyiOo2o4qUyUp_7Cte4",
  authDomain: "discord-clone-1c7d6.firebaseapp.com",
  projectId: "discord-clone-1c7d6",
  storageBucket: "discord-clone-1c7d6.appspot.com",
  messagingSenderId: "1020564078999",
  appId: "1:1020564078999:web:e8a81087a09653e9a504d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
