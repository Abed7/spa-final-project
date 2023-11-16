import { useNavigate } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/");
  };

  return (
    <div className="no-match">
      {/* <h1>Page not found 404</h1> */}
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagentestudio.com%2Fuploads%2Fpost%2Fimage%2F69%2Fmain_how_to_design_404_page.png&f=1&nofb=1&ipt=ff28687924ee95567ff3b273392fd2a264f73fbec6a50f2aa2bd873d2f1b74c8&ipo=images" alt="" />
      <button onClick={handleRoute}>Back to Homepage</button>
    </div>
  );
};

export default NoMatch;
