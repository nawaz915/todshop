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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot);
    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
               displayName,
               email,
               ...additionalData 
            })
        } catch(error) {
            console.log ('error creating user ' , error.message);
        }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;