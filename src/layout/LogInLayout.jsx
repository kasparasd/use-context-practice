import { Outlet } from "react-router-dom";
import { HeaderSimple } from "../components/HeaderSimple";

export function LogInLayout() {
  return (
    <>
      <HeaderSimple />
      <Outlet />
    </>
  );
}
