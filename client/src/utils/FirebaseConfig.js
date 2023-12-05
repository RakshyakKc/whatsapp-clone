
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyAq295CfDUwR0o8L-95xL6sQKBFVofVZmI",
  
    authDomain: "chatapp-5bf14.firebaseapp.com",
  
    projectId: "chatapp-5bf14",
  
    storageBucket: "chatapp-5bf14.appspot.com",
  
    messagingSenderId: "637263960679",
  
    appId: "1:637263960679:web:a7e19b4d5612ef953612c2",
  
    measurementId: "G-ZD9XVM3PH8"
  
  };
  
  const app = initializeApp(firebaseConfig)
  export const firebaseAuth = getAuth(app)