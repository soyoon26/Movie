import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

reportWebVitals();
