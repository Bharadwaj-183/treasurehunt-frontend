import { useNavigate } from "react-router-dom";
import Chest from "./Chest";
const Door3 = () => {
  const navigate = useNavigate();

  const handleChest2 = () => {
    navigate("/pirate/stage4/emptychest");
  };
  const handleChest3 = () => {
    navigate("/pirate/stage4/correctchest");
  };

  return (
    <div id="Door1Div">
      <a className="chestlink" onClick={handleChest2}>
        <Chest data={"/images/gif1.gif"} />
      </a>
      <a className="chestlink" onClick={handleChest3}>
        <Chest />
      </a>
      <a className="chestlink" onClick={handleChest2}>
        <Chest />
      </a>
    </div>
  );
};

export default Door3;
