import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCiErNmkxc4y5u8xnxnIl1UlF-Dbx6IV0E',
  authDomain: 'crwn-db-80a66.firebaseapp.com',
  databaseURL: 'https://crwn-db-80a66.firebaseio.com',
  projectId: 'crwn-db-80a66',
  storageBucket: 'crwn-db-80a66.appspot.com',
  messagingSenderId: '56231088812',
  appId: '1:56231088812:web:6f5adf3268d4fddd004509',
  measurementId: 'G-TKXJVWZ48Y'
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();                                                                                                                                
  provider.setCustomParameters({ 'prompt': 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;