"use client";

import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push("/signup");
  }
  return children;
};

export default PrivateRoute;
