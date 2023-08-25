import axios from 'axios';
import { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);

  const login = async(formData) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", formData, {
      withCredentials:true,
    });

    setCurrentUser(res.data)
  };

  const logout = async () => {
    // Handle logout process
    // Set the user state to null
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser) || "null")
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
