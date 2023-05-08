import { useNavigate } from "react-router-dom";
import Door from "./Door";
import "./DoorList.css";
const DoorList = () => {
  const navigate = useNavigate();

  const handleDoor1 = () => {
    navigate("/pirate/stage4/door1");
  };
  const handleDoor2 = () => {
    navigate("/pirate/stage4/door2");
  };
  const handleDoor3 = () => {
    navigate("/pirate/stage4/door3");
  };

  const handleDeadend = () => {
    navigate("/pirate/stage4/deadend");
  };

  return (
    <div id="DoorListDiv">
      <a className="doorlink" onClick={handleDoor1}>
        <Door />
      </a>
      <a className="doorlink" onClick={handleDeadend}>
        <Door />
      </a>
      <a className="doorlink" onClick={handleDoor2}>
        <Door />
      </a>
      <a className="doorlink" onClick={handleDeadend}>
        <Door />
      </a>
      <a className="doorlink" onClick={handleDoor3}>
        <Door />
      </a>
      <a className="doorlink" onClick={handleDeadend}>
        <Door />
      </a>
    </div>
  );
};

export default DoorList;
