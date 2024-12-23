
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCEZ-QsowcOftHVRQP0LW4vTeHaeCPuYMw",
  authDomain: "fresh-fruits-ddc14.firebaseapp.com",
  projectId: "fresh-fruits-ddc14",
  storageBucket: "fresh-fruits-ddc14.firebasestorage.app",
  messagingSenderId: "806169888161",
  appId: "1:806169888161:web:295f0393d93e79cd9ab7e0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

