import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
import "./Login.css"


const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const location = useLocation();
  console.log(location.state);
  // console.log(location.state.path);
  const redirectPath = location.state?.pathname || "/";


  useEffect(() => {
    console.log("updated?",user)
    auth.login(user);
  }, [user])


  const handleLogin = (e) => {
    e.preventDefault()
    console.log(e.target.login.value);
    setUser(e.target.login.value)
    if(user)
    {navigate(redirectPath, {replace: true});} 
  };
  
const handleRoute = () => {
  navigate(redirectPath, {replace: true});
}

  return (
    <div className="container">
      {!user
      ? (<form className="form-wrapper" onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>
          <label>
            Please enter your name :{" "}</label>
            <input
              type="text"
              name="login"
              placeholder="Name..."
            />
          
          <button type="submit">Login</button>
      </form>
      ):(
        <p>Loged in... {handleRoute()}</p>
        
      )}
    </div>
  );
};

export default Login;
