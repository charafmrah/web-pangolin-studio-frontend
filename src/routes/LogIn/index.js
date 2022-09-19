import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex flex-col justify-center w-full md:w-2/3">
      <div className="w-full pb-16 my-2 mt-16 bg-white border-2 rounded-lg shadow-md shadow-black md:pb-24">
        <h1 className="text-secondary">Log In</h1>

        <div className="flex justify-center mt-5">
          <form className="flex flex-col justify-center w-3/5">
            <label className="mt-5 text-xl text-gray-600">Email</label>
            <input className="" type="email" placeholder="you@domain.com" />

            <label className="mt-5 text-xl text-gray-600">Password</label>
            <input className="" type="password" placeholder="Password" />

            <Link to="/forgot-password" className="mt-5 text-gray-600 text-md">
              I forgot my password.
            </Link>

            <button className="p-2 mt-5 text-xl text-white rounded-lg bg-primary hover:bg-secondary">
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
