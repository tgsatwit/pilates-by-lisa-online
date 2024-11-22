import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC97UJYyI-LDPk_g7tzx3H4KG-O5gkfW6o",
  authDomain: "pilates-by-lisa-online.firebaseapp.com",
  projectId: "pilates-by-lisa-online",
  storageBucket: "pilates-by-lisa-online.firebasestorage.app",
  messagingSenderId: "445868581831",
  appId: "1:445868581831:web:7649996a8af828f5216fe2",
  measurementId: "G-DFW346NCMS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };