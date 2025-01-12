"use client";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
    return () => unsub();
  }, []);

  const handelSignInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      setIsError(error?.message);
    }

    setIsLoading(false);
  };

  const handelLogout = async () => {
    setIsLoading(true);

    try {
      await signOut(auth);
    } catch (error) {
      setIsError(error?.message);
    }

    setIsLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{ user, isLoading, isError, handelLogout, handelSignInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
