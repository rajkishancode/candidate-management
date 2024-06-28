import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAR9HXKDm602CcE6Mi5pihqdj1KIPiS9TQ",
  authDomain: "candidate-management-912dd.firebaseapp.com",
  projectId: "candidate-management-912dd",
  storageBucket: "candidate-management-912dd.appspot.com",
  messagingSenderId: "24269008489",
  appId: "1:24269008489:web:4f43c4655afd71de613cf8",
  measurementId: "G-P29RNWGES6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log("user >>>>>", result.user);
  return result.user;
};

export const logout = () => {
  return signOut(auth);
};

// export const onAuthStateChangedListener = (callback) => {
//   return onAuthStateChanged(auth, callback);
// };
export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is logged in:", user);
    } else {
      console.log("No user is logged in.");
    }
    callback(user);
  });
};
