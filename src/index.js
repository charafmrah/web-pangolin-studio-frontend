import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./routes/HomePage";
import reportWebVitals from "./utils/reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageGenerator from "./routes/ImageGenerator";
import Account from "./routes/Account";
import Settings from "./routes/Settings";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";
import ForgotPassword from "./routes/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Shop from "./routes/Shop";
import Gallery from "./routes/Gallery";
import ImageCard from "./routes/Gallery/ImageCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route
              path="image-generator"
              element={
                <PrivateRoute>
                  <ImageGenerator />
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
            <Route
              path="shop"
              element={
                <PrivateRoute>
                  <Shop />
                </PrivateRoute>
              }
            />
            <Route
              path="gallery"
              element={
                <PrivateRoute>
                  <Gallery />
                </PrivateRoute>
              }
            >
              <Route path=":id" element={<ImageCard />} />
            </Route>
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
