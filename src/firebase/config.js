// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8DX7QmMDvAMbk8Xlgmfzgx7SoqiiFZF4",
  authDomain: "ecommercefranchini.firebaseapp.com",
  projectId: "ecommercefranchini",
  storageBucket: "ecommercefranchini.appspot.com",
  messagingSenderId: "1088481489352",
  appId: "1:1088481489352:web:9367c16680bb1d4027d0fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}