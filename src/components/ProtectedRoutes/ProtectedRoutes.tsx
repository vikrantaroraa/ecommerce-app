import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "src/context/auth-context";

function ProtectedRoutes() {
  let { isUserLoggedIn } = useAuth();
  const location = useLocation();

  const userLocationBeforeRedirect = location.pathname;

  const loginStatus = JSON.parse(localStorage.getItem("loginStatus") as string);

  if (loginStatus) {
    isUserLoggedIn = loginStatus.isUserLoggedIn;
  }

  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      state={{ from: userLocationBeforeRedirect }}
      replace
      to="/login"
    />
  );
}

export default ProtectedRoutes;
