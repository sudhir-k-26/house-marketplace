// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdXNA-VsiX0mINzzvls1WV7iy4mwtPpSo",
  authDomain: "house-marketplace-app-f5b93.firebaseapp.com",
  projectId: "house-marketplace-app-f5b93",
  storageBucket: "house-marketplace-app-f5b93.appspot.com",
  messagingSenderId: "841900995467",
  appId: "1:841900995467:web:5cddf8905eaa023260f58e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore();