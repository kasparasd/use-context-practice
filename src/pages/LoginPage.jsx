import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Navigate } from "react-router-dom";

export function LoginPage() {
  const { isLogedIn, updateIsLogedIn } = useContext(GlobalContext);

  function handleLogIn() {
    updateIsLogedIn(true);
  }

  let htmlToReturn;

  if (isLogedIn) {
    htmlToReturn = (
      <>
        <div>You are already logged in</div>
      </>
    );
  } else
    htmlToReturn = (
      <>
        <p>Do you want to log in?</p>
        <button onClick={handleLogIn}>Log in</button>
      </>
    );
  if (isLogedIn) {
    return <Navigate to="/account" />;
  }
  return <>{htmlToReturn}</>;
}
