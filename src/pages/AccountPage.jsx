import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export function AccountPage() {
  const { isLogedIn } = useContext(GlobalContext);

  let htmlToReturn;

  if (isLogedIn) {
    htmlToReturn = <div>You are logged in, this is your account</div>;
  } else {
    htmlToReturn = (
      <div>
        Please log in to your account. <Link to={"/login"}>Log in</Link>
      </div>
    );
  }

  return <>{htmlToReturn}</>;
}
