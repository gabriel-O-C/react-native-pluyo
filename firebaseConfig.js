import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// };

const firebaseConfig = {
  apiKey: "AIzaSyBdwdVHCytE8LWDjCXXkoibtXjHt1hUvFU",
  authDomain: "fluyo-2a53b.firebaseapp.com",
  projectId: "fluyo-2a53b",
  storageBucket: "fluyo-2a53b.appspot.com",
  messagingSenderId: "43715302138",
  appId: "1:43715302138:web:9720c10b1f33551b01ef43"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const db = getFirestore(app)
