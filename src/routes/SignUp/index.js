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
  const history = useNavigate();

  return (
    <div className="w-full md:w-2/3 flex flex-col justify-center">
      <div className="w-full border-2 shadow-md shadow-black bg-white rounded-lg pb-16 md:pb-24 mt-16 my-2">
        <h1 className="text-secondary">Sign Up</h1>

        <div className="flex justify-center mt-5">
          <form className="flex flex-col justify-center w-3/5">
            <label className="text-gray-600 text-xl mt-5">Email</label>
            <input className="" type="email" placeholder="you@domain.com" />

            <label className="text-gray-600 text-xl mt-5">Password</label>
            <input className="" type="password" placeholder="password" />

            <label className="text-gray-600 text-xl mt-5">
              Confirm Password
            </label>
            <input className="" type="password" placeholder="password" />

            <button className="bg-primary hover:bg-secondary text-white text-xl mt-5 p-2 rounded-lg">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <p className=" text-white text-xl mt-5">
        Already have an account?{" "}
        <Link to="/login" className="text-primary">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
