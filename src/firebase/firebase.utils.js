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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
