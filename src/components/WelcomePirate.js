import "./WelcomePirate.css";
import { useNavigate } from "react-router-dom";

const WelcomePirate = () => {
  const navigate = useNavigate();

  const handleBegin = () => {
    navigate("/pirate/stage1");
  };
  return (
    <div id="welcomeDiv">
      <h1>Welcome Pirate!!</h1>
      <div id="innerDiv">
        <span>
          <img
            className="move"
            id="jack"
            src="/images/pic2.webp"
            alt="jacksparrow"
          />
        </span>

        <span id="span2">
          <h3>Meet Jack.</h3>
          BlackBeard ,a legendary pirate hid all of his treasures <br />
          in one of the islands he lived in.
          <br /> You need to find out which island it is.
          <br /> Jack is a Gentleman Pirate.
          <br />
          He will guide you through your journey
        </span>
      </div>
      <button className="piratebtn success" onClick={handleBegin}>
        Let's Begin
      </button>
    </div>
  );
};

export default WelcomePirate;
