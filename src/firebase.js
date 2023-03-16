import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM4bH0oJfvp5pdoz3jx3bhcxAyfea7osU",
  authDomain: "expense-464bc.firebaseapp.com",
  projectId: "expense-464bc",
  storageBucket: "expense-464bc.appspot.com",
  messagingSenderId: "97687280946",
  appId: "1:97687280946:web:5a0ade48baf44ba1468b2b",
  measurementId: "G-W9X30J13VW"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
