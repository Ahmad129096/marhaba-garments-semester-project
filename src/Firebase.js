import firebase from 'firebase';


const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyABWAshCYvaYt_Pcj7riYPF0teq5BU10XM",
    authDomain: "marhaba-gamrments.firebaseapp.com",
    projectId: "marhaba-gamrments",
    storageBucket: "marhaba-gamrments.appspot.com",
    messagingSenderId: "24191236226",
    appId: "1:24191236226:web:ca96c4a8e52d0b148a5c9b",
    measurementId: "G-2T9X6QJ6VF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};