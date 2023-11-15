import { useAuth } from "./Auth"; // get User
import { Navigate, useLocation } from "react-router-dom";



const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  // if(!auth.user){
  //   return <Navigate to="/login" state={{ path: location }} replace />;
  // }
  //   return children;

  console.log(children);
  return(
    auth?.user
        ? children
        : <Navigate to="/login" state={{ path: location }} replace /> 
  );
     
  };
  // return <Navigate to="/login" state = {{ path: location.pathname }}/>
  // return children;

export default RequireAuth