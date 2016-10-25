import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAHXAtiBE1W3yYsiSGyhnK7FBVyydAalP8',
  authDomain: 'chat-app-d59cd.firebaseapp.com',
  databaseURL: 'https://chat-app-d59cd.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '1067075746848'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('messages');
