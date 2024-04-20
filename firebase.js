// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoEjlPX2btyVKW41z7EN0D8th_0VxU7qc",
  authDomain: "mad-quiz-02.firebaseapp.com",
  databaseURL: "https://mad-quiz-02-default-rtdb.firebaseio.com",
  projectId: "mad-quiz-02",
  storageBucket: "mad-quiz-02.appspot.com",
  messagingSenderId: "953330659475",
  appId: "1:953330659475:web:fafa318e8c18fa7ba81d66",
  measurementId: "G-KCLGVQ5WTK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const storage = getStorage(firebaseApp);
// change the rules of Storage as follows:

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// }
