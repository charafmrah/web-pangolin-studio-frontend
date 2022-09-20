import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

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

      <p className="text-white text-center text-xl mb-16">
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
