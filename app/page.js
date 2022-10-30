"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import "styles/globals.css";
import HomePage from "./HomePage";
import reportWebVitals from "../utils/reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThumbnailGenerator from "./ThumbnailGenerator";
import Account from "./Account";
import Settings from "./Settings";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "../components/PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route
              path="thumbnail-generator"
              element={
                <PrivateRoute>
                  <ThumbnailGenerator />
                </PrivateRoute>
              }
            />
            <Route
              path="settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <h1 className="flex justify-center mt-20 mb-5 text-white text-9xl">
                    404
                  </h1>
                  <p className="flex justify-center text-4xl text-white">
                    Page not found
                  </p>
                </main>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
