import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFireStore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD-EhFit2QZjhpq5b1MA-oEuGNAb10HItU",
  authDomain: "cloudhotelauth.firebaseapp.com",
  projectId: "cloudhotelauth",
  storageBucket: "cloudhotelauth.appspot.com",
  messagingSenderId: "294134087272",
  appId: "1:294134087272:web:5c8dc7d1eac5fc06ef05dd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getFireStore();

export {auth, database};