import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';


const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyCf2mv9txiv8USvfup4hrHdRRTvlkaHkM8",
    authDomain: "instagram-clone-23000.firebaseapp.com",
    projectId: "instagram-clone-23000",
    storageBucket: "instagram-clone-23000.appspot.com",
    messagingSenderId: "586289042400",
    appId: "1:586289042400:web:684e0f5735fb6a3db4d185",
    measurementId: "G-306JYRWP34"
  });

  const db = firebase.firestore();
  const auth = firebase.auth(); //sistema de login
  const storage = firebase.storage();//upload de arquivos
  const functions = firebase.functions();//
  
  export {db, auth, storage, functions};