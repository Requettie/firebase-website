import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseApp = initializeApp({});

const auth = getAuth():
const db = getFirestore();

//Detect auth state

onAuthStateChanged(auth, user => {
if(user /= null){
    console.log('logged in!');
} else {
    console.log('No user');
}
});