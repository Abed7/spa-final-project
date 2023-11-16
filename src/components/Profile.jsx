import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import "./Profile.css";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <section className="wrapper">
      
      <h5>Welcome {auth.user}</h5>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export default Profile;
