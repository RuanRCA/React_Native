
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {initializeAuth , getReactNativePersistence} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFEu-GtuVXfwKkvfq-Y8Uxe6NyreJth3w",
  authDomain: "tds03-24b5e.firebaseapp.com",
  projectId: "tds03-24b5e",
  storageBucket: "tds03-24b5e.firebasestorage.app",
  messagingSenderId: "837724110194",
  appId: "1:837724110194:web:72f02f05a3200b6922f1eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(AsyncStorage)
})

export {db , auth};