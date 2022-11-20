import { Navigate } from "react-router-dom";
import useAppContext from "../store/appContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();

  if (user === null) {
    return <Navigate to="/landing" />;
  }

  return children;
};

export default ProtectedRoute;
