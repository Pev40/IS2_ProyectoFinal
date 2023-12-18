import AuthContext from "contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; 

const RequireAuth = ({ children }) => {
  const { user, token } = useContext(AuthContext);

  if (!user || !token) {
    return <Navigate to="/login" />;
  }
  return children;
};


RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
