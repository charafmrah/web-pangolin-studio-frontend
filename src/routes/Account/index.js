import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { functions } from "../../firebase";

const Account = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const thumbnail = functions.httpsCallable("api/thumbnail");
  thumbnail({ text: "test text" }).then((result) => {
    // Read result of the Cloud Function.
    var sanitizedMessage = result.data.text;
    console.log(sanitizedMessage);
  });

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="flex flex-col">
      <h1>Account</h1>

      <p className="mb-16 text-xl text-center text-white">
        {currentUser.email}
      </p>
      {error && (
        <h3 className="text-xl font-medium text-center text-red-500 md:text-2xl">
          {error}
        </h3>
      )}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Account;
