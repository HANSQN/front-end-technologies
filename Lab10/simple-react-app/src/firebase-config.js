import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIlCtzXDjCA-3_xg_vklwMpjCGIVGku8I",
    authDomain: "react-expense-a7778.firebaseapp.com",
    projectId: "react-expense-a7778",
    storageBucket: "react-expense-a7778.appspot.com",
    messagingSenderId: "607634166676",
    appId: "1:607634166676:web:f74fc425ba991595b37581",
    measurementId: "G-9S27R58984"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);