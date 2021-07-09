import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBYr6LHZ8t1p4nucdna1vInHwTJnSpLilQ',
  authDomain: 'vue-test-8b599.firebaseapp.com',
  projectId: 'vue-test-8b599',
  storageBucket: 'vue-test-8b599.appspot.com',
  messagingSenderId: '17747152085',
  appId: '1:17747152085:web:6be954d9eef941a3ffa65c',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage,
};
