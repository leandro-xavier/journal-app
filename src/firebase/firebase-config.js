import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCENAgRvxW9dzvAN1USPL-KaU2Yo_4fz6I",
    authDomain: "react-app-journal-25857.firebaseapp.com",
    projectId: "react-app-journal-25857",
    storageBucket: "react-app-journal-25857.appspot.com",
    messagingSenderId: "474705833156",
    appId: "1:474705833156:web:d89b8b583b84724aefed91"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}