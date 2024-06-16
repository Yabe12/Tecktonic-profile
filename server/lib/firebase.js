import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDLBw44hXE1oc7gBHw3WkYqEsh5bK7SShU",
  authDomain: "react-chat-1c4b2.firebaseapp.com",
  projectId: "react-chat-1c4b2",
  storageBucket: "react-chat-1c4b2.appspot.com",
  messagingSenderId: "175569793950",
  appId: "1:175569793950:web:9f01752cbfecdb97459c8f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
