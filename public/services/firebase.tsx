import { initializeApp } from "firebase/app"; //Firebase SDK for initializeApp
import { getStorage } from "firebase/storage"; //Firebase SDK for getStorage
import { getAuth } from "firebase/auth"; //Firebase SDK for getAuth
import { getFirestore } from "firebase/firestore"; //Firebase SDK for getFirestore
import { getFunctions } from "firebase/functions"; //Firebase SDK for getFunctions

const firebaseConfig = { //Initialize configuration variables
    apiKey: process.env.NEXT_PUBLIC_PWATEMP_apiKey,
    authDomain: process.env.NEXT_PUBLIC_PWATEMP_authDomain,
    projectId: process.env.NEXT_PUBLIC_PWATEMP_projectId,
    storageBucket: process.env.NEXT_PUBLIC_PWATEMP_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_PWATEMP_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_PWATEMP_appId,
    measurementId: process.env.NEXT_PUBLIC_PWATEMP_measurementId,
  };

const firebase = initializeApp(firebaseConfig); //Constant implementation to be exported as resource for firebase
const storage = getStorage(firebase); //Constant implementation to be exported as resource for storage
const authentication = getAuth(firebase); //Constant implementation to be exported as resource for authentication
const firestore = getFirestore(firebase); //Constant implementation to be exported as resource for firestore
const functions = getFunctions(firebase); //Constant implementation to be exported as resource for functions

export { firebase, storage, authentication, firestore, functions }; //Exports