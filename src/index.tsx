import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";


const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw Error("rootElement is null");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <App />,
);
