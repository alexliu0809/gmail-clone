import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBwfvbCqIggFvTX7NbMGrfE_ne793ETc6k",
    authDomain: "clone-e0ec2.firebaseapp.com",
    projectId: "clone-e0ec2",
    storageBucket: "clone-e0ec2.appspot.com",
    messagingSenderId: "263700219438",
    appId: "1:263700219438:web:fe92b6e222f2c6542a01bf"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
