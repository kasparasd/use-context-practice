import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function HomePage() {
  const { isLogedIn } = useContext(GlobalContext);

  let status;

  if (isLogedIn) {
    status = "You are logged in";
  } else {
    status = "You are not logged in";
  }

  return (
    <>
      <div>This is Home page, {status}</div>
    </>
  );
}
