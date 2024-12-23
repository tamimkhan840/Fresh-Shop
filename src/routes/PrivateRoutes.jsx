import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";

// eslint-disable-next-line react/prop-types
export default function PrivateRoutes({ children }) {
  const { users, isLoader } = useContext(AuthContext);

  if (isLoader) {
    return <span className="loading loading-bars loading-lg h-[20vw]"></span>;
  }

  if (users) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
}