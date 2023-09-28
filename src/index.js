import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
//import { getFirestoreApp } from "../src/firebase/config";

//getFirestoreApp();

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8iLzcWCyjf31F1NERddlDpUhmRCwCxyM",
    authDomain: "ecommercefranchini-4e94a.firebaseapp.com",
    projectId: "ecommercefranchini-4e94a",
    storageBucket: "ecommercefranchini-4e94a.appspot.com",
    messagingSenderId: "325827082388",
    appId: "1:325827082388:web:b58d16c99eefeaea895c81",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
