import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./routes/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThumbnailGenerator from "./routes/ThumbnailGenerator";
import Account from "./routes/Account";
import TitleGenerator from "./routes/TitleGenerator";
import Settings from "./routes/Settings";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";
import ForgotPassword from "./routes/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="thumbnail-generator"
              element={<ThumbnailGenerator />}
            />
            <Route path="title-generator" element={<TitleGenerator />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
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
