import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const login = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  const saveUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};
