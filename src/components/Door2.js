import Chest from "./Chest";
import { useNavigate } from "react-router-dom";
const Door2 = () => {
  const navigate = useNavigate();

  const handleChest2 = () => {
    navigate("/pirate/stage4/emptychest");
  };

  return (
    <div id="Door1Div">
      <a className="chestlink" onClick={handleChest2}>
        <Chest data={"/images/gif1.gif"} />
      </a>
      <a className="chestlink" onClick={handleChest2}>
        <Chest />
      </a>
      <a className="chestlink" onClick={handleChest2}>
        <Chest />
      </a>
    </div>
  );
};

export default Door2;
