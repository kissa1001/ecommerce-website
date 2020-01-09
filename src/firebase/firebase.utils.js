import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC2FgR7fuz2XcipbXzIDEw5iho6fIkMPQ4",
  authDomain: "ecomerce-db-react.firebaseapp.com",
  databaseURL: "https://ecomerce-db-react.firebaseio.com",
  projectId: "ecomerce-db-react",
  storageBucket: "ecomerce-db-react.appspot.com",
  messagingSenderId: "787677707562",
  appId: "1:787677707562:web:501409a7cb798e25a17253"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
