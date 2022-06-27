import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import { getFirestoreApp } from "./firebase/config";

getFirestoreApp();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
