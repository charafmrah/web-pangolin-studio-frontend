"use client";

import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";

export default function Account() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      router.push("/login");
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
}
