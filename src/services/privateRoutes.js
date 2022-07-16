import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  // Get the current user if the current user is null return a redirect to home command else render the serverd component
  return currentUser ? children : <Navigate to="/" />;
}
