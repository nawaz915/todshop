import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC_ksbB15K-vLFzt3xLOVNoxF82rqCYsm8",
    authDomain: "todshop321.firebaseapp.com",
    projectId: "todshop321",
    storageBucket: "todshop321.appspot.com",
    messagingSenderId: "407757607702",
    appId: "1:407757607702:web:8acf6806d9fb49036c7637",
    measurementId: "G-1TYWQLPHCR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;