// AuthenticationContext.js
import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  return (
    <AuthenticationContext.Provider value={{ token }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};
