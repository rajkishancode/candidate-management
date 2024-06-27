import { createContext, useState, useEffect } from "react";
import {
  loginWithGoogle,
  logout,
  onAuthStateChangedListener,
} from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, login: loginWithGoogle, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
