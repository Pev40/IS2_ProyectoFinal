import AuthContext from "contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user, token } = useContext(AuthContext);

  if (!user || !token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
