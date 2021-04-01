import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDTT4lWRD7WiHGOuktZZdLi30rO5rO_3Ss',
    authDomain: 'totnghiep-6cbfe.firebaseapp.com',
    projectId: 'totnghiep-6cbfe',
    storageBucket: 'totnghiep-6cbfe.appspot.com',
    messagingSenderId: '305938007206',
    appId: '1:305938007206:web:729a2a210181b83fa2a067',
    measurementId: 'G-ZEY04XC3HF',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export { auth, provider, db };