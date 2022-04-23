import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import the seed file
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDIaE3eAGUlIqdM_7a8XdaNaCTWh7XrMms',
  authDomain: 'insta-clone-ea9b1.firebaseapp.com',
  projectId: 'insta-clone-ea9b1',
  storageBucket: 'insta-clone-ea9b1.appspot.com',
  messagingSenderId: '233303138170',
  appId: '1:233303138170:web:4d0f7672345509f8ef00c3'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Onlu need to run this once!
// seedDatabase(firebase);
export { firebase, FieldValue };
