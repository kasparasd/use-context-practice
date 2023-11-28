import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link, Navigate } from "react-router-dom";

export function LogOutPage() {
  const { isLogedIn, updateIsLogedIn } = useContext(GlobalContext);

  function handleLogOut() {
    if (isLogedIn) {
      updateIsLogedIn(false);
    }
  }

  let htmlToReturn;

  if (isLogedIn) {
    htmlToReturn = (
      <>
        <p>Do you want to log out?</p>
        <button onClick={handleLogOut}>Log out</button>
      </>
    );
  } else {
    htmlToReturn = <div>You are not legged in.</div>;
  }

  if (!isLogedIn) {
    return <Navigate to="/" />;
  }

  return <>{htmlToReturn}</>;
}
