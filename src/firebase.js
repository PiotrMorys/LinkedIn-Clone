import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAmbqLZjq3jHavPBf4h6YRFIV-nfgQY04Y",
    authDomain: "linkedin-copy-73ff0.firebaseapp.com",
    projectId: "linkedin-copy-73ff0",
    storageBucket: "linkedin-copy-73ff0.appspot.com",
    messagingSenderId: "795631268839",
    appId: "1:795631268839:web:4310b48461e7e603a10342",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };