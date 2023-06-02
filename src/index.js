import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/fonts.css";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";
import { AddressProvider } from "./context/AddressContext";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <AddressProvider>
            <App />
          </AddressProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
