import { useAuth } from "src/context/auth-context";

const Login = () => {
  const { isUserLoggedIn, loginUserWithCredentials } = useAuth();

  return (
    <div>
      {!isUserLoggedIn && <h3>Chaabi Laya Kya ?</h3>}
      {isUserLoggedIn && <h3>You're currently logged in!</h3>}
      <button onClick={loginHandler}>
        {isUserLoggedIn ? "I am logged in" : "I am logged out (click to login)"}
      </button>
    </div>
  );

  function loginHandler() {
    loginUserWithCredentials("harshit", "negi");
    // navigate(state?.from ? state.from : "/");
  }
};

export default Login;
