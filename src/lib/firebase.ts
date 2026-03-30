import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaUDsmWWATVfyNPbNeNrsKyDhKK9QzVng",
  authDomain: "lurith-store.firebaseapp.com",
  projectId: "lurith-store",
  storageBucket: "lurith-store.firebasestorage.app",
  messagingSenderId: "808588623241",
  appId: "1:808588623241:web:ca8c77c24141bc2bbb3558",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
