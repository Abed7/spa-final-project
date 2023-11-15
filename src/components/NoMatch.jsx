import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Page not found 404</h1>
      <button onClick={handleRoute}>Back to Homepage</button>
    </>
  );
};

export default NoMatch;
