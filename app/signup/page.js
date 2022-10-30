"use client";

import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/thumbnail-generator");
    } catch {
      setError(`Failed to create an account! ${error}`);
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col justify-center w-full md:w-2/3">
      <div className="w-full pb-16 my-2 mt-16 bg-white border-2 rounded-lg shadow-md shadow-black md:pb-24">
        <h1 className="text-secondary">Sign Up</h1>
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
              placeholder="password"
              ref={passwordRef}
              required
            />

            <label className="mt-5 text-xl text-gray-600">
              Confirm Password
            </label>
            <input
              className=""
              type="password"
              placeholder="password"
              ref={passwordConfirmRef}
              required
            />

            <button
              disabled={loading}
              className="p-2 mt-5 text-xl text-white rounded-lg bg-primary hover:text-white hover:bg-secondary"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <p className="mt-5 text-xl text-white ">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
