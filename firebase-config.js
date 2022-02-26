import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRARV3htv75MDhnI--N874iXyzPLEpo_8",
  authDomain: "friendlychat-53530.firebaseapp.com",
  databaseURL: "https://friendlychat-53530-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "friendlychat-53530",
  storageBucket: "friendlychat-53530.appspot.com",
  messagingSenderId: "384669647506",
  appId: "1:384669647506:web:5a695e170dffacc56bdc4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// above app need auth service
export const auth = getAuth(app);
export const provider =  new GoogleAuthProvider(app);
