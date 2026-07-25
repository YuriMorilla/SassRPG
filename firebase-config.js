import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut, updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc,
  collection, addDoc, query, where, getDocs, onSnapshot,
  serverTimestamp, arrayUnion, arrayRemove
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ============================================================
// Troque os valores abaixo pelos do SEU projeto Firebase.
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyBdpwpPwPrFrjF6vJ6qqwmffiSRGCDcYOI",
  authDomain: "saas-rpg.firebaseapp.com",
  projectId: "saas-rpg",
  storageBucket: "saas-rpg.firebasestorage.app",
  messagingSenderId: "766714058039",
  appId: "1:766714058039:web:0ce4f37fe8f281b92876b2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth, db,
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile,
  doc, getDoc, setDoc, updateDoc, deleteDoc,
  collection, addDoc, query, where, getDocs, onSnapshot,
  serverTimestamp, arrayUnion, arrayRemove
};
