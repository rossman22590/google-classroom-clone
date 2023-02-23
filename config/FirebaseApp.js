import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAHkrP2---KmfUX5O4x31SlohUOcPJ0F6E",
  authDomain: "classroom-b4909.firebaseapp.com",
  projectId: "classroom-b4909",
  storageBucket: "classroom-b4909.appspot.com",
  messagingSenderId: "54635505429",
  appId: "1:54635505429:web:6391a72dd86578dbfcab1c",
  measurementId: "G-ZH66C3FMWV"
};

// if a Firebase instance doesn't exist, create one
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
  db
}

export default app;
