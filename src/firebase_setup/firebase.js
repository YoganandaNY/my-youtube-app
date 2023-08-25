import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// export const firebaseConfig = {
//   apiKey: "AIzaSyC3QfQ2xAzK6aeLO5AkEnSUmXw1HI7lNv4",
//   authDomain: "fir-7fa8f.firebaseapp.com",
//   projectId: "fir-7fa8f",
//   storageBucket: "fir-7fa8f.appspot.com",
//   messagingSenderId: "640346649470",
//   appId: "1:640346649470:web:eb0ea5c94e76c1bee4b92f",
// };

const firebaseConfig = {
  apiKey: "AIzaSyASnhLsK07x-kDfmz7RUFYStTYt_FasL34",
  authDomain: "angular---firebase.firebaseapp.com",
  projectId: "angular---firebase",
  storageBucket: "angular---firebase.appspot.com",
  messagingSenderId: "16258499977",
  appId: "1:16258499977:web:6f69724813612084b34d58",
};

// Initilize the Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;
