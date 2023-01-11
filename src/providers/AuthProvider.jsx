import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem("user"));

  const login = (user) => {
    sessionStorage.setItem("user", user);
    setUser(user);
  };

  const logout = () => {
    sessionStorage.removeItem("user")
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
