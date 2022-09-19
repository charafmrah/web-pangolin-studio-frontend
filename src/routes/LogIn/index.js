import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-full md:w-2/3 flex flex-col justify-center">
      <div className="w-full border-2 shadow-md shadow-black bg-white rounded-lg pb-16 md:pb-24 mt-16 my-2">
        <h1 className="text-secondary">Log In</h1>

        <div className="flex justify-center mt-5">
          <form className="flex flex-col justify-center w-3/5">
            <label className="text-gray-600 text-xl mt-5">Email</label>
            <input className="" type="email" placeholder="you@domain.com" />

            <label className="text-gray-600 text-xl mt-5">Password</label>
            <input className="" type="password" placeholder="Password" />

            <Link to="/forgot-password" className="text-gray-600 text-md mt-5">
              I forgot my password.
            </Link>

            <button className="bg-primary hover:bg-secondary text-white text-xl mt-5 p-2 rounded-lg">
              Log in
            </button>
          </form>
        </div>
      </div>
      <p className=" text-white text-xl mt-5">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
