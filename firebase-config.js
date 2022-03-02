import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  ....
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// above app need auth service
export const auth = getAuth(app);
export const provider =  new GoogleAuthProvider(app);
