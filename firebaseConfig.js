import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR-TbAaehihZcZZramUG91RqJFWJXFII0",
  authDomain: "jkl-goals.firebaseapp.com",
  projectId: "jkl-goals",
  storageBucket: "jkl-goals.firebasestorage.app",
  messagingSenderId: "300933876692",
  appId: "1:300933876692:web:6b047e1a43cb0582936441"
};
 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)