"use client";

import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/thumbnail-generator");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col justify-center w-full md:w-2/3">
      <div className="w-full pb-16 my-2 mt-16 bg-white border-2 rounded-lg shadow-md shadow-black md:pb-24">
        <h1 className="text-secondary">Log In</h1>
        {error && (
          <h3 className="text-xl font-medium text-center text-red-500 md:text-2xl">
            {error}
          </h3>
        )}

        <div className="flex justify-center mt-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-3/5"
          >
            <label className="mt-5 text-xl text-gray-600">Email</label>
            <input
              className=""
              type="email"
              placeholder="you@domain.com"
              ref={emailRef}
              required
            />

            <label className="mt-5 text-xl text-gray-600">Password</label>
            <input
              className=""
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />

            <Link to="/forgot-password" className="mt-5 text-gray-600 text-md">
              I forgot my password.
            </Link>

            <button
              disabled={loading}
              className="p-2 mt-5 text-xl text-white rounded-lg bg-primary hover:text-white hover:bg-secondary"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
      <p className="mt-5 text-xl text-white ">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
