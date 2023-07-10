// create a file (e.g privateRoute.js) write this code

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
// };

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;