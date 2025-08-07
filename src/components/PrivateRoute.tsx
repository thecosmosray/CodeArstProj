import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children }: { children:React.ReactNode }) => {
  const { state } = useAuth();

  
return state.logeedIn ? children : <Navigate to="/login" />;

};
