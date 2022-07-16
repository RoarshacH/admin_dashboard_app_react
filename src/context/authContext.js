import React, { useContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const authentication = getAuth();

  function signup(email, password) {
    return createUserWithEmailAndPassword(authentication, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(authentication, email, password);
  }

  function logout() {
    signOut(authentication);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(authentication, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (res) => {
      res ? setCurrentUser(res) : setCurrentUser(null);

      setLoading(false);
    });
    return unsubscribe;
  });

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
