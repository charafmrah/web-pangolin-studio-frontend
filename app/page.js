"use client";

import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/globals.css";
import HomePage from "./HomePage/layout";
import reportWebVitals from "../utils/reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThumbnailGenerator from "./ThumbnailGenerator/layout";
import Account from "./Account/layout";
import Settings from "./Settings/layout";
import SignUp from "./SignUp/layout";
import LogIn from "./LogIn/layout";
import ForgotPassword from "./ForgotPassword/layout";
import PrivateRoute from "../components/PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";

export default function Page() {
  return (
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
}
