import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reducer, {initialState} from "./reducer";
import reportWebVitals from "./reportWebVitals";
import {StateProvider} from "./StateProvider";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./firebase-messaging-sw.js")
      .then(function(registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
      });
}
ReactDOM.render(
    <React.StrictMode>
    <StateProvider initialState = {initialState} reducer = {reducer}><App />
    </StateProvider>
  </React.StrictMode>,
    document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
