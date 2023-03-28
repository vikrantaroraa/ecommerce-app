import { createContext, useContext, useEffect, useState } from "react";
import { fakeAuthApi } from "./fakeAuthApi";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
    loginStatus?.isUserLoggedIn && setIsUserLoggedIn(true);
  }, []);

  const loginUserWithCredentials = async (username, password) => {
    try {
      const response = await fakeAuthApi(username, password);
      if (response.success) {
        setIsUserLoggedIn(true);
        localStorage.setItem(
          "loginStatus",
          JSON.stringify({ isUserLoggedIn: true })
        );
        navigate(state?.from ? state.from : "/");
      }
    } catch (error) {
      console.log("Wrong username or password", error);
    }
  };

  const logoutUser = () => {
    setIsUserLoggedIn(false);
    localStorage.removeItem("loginStatus");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isUserLoggedIn, loginUserWithCredentials, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
