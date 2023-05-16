import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import "./css/fonts.css"
import { DataProvider } from "./context/DataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
    <App />
    </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
