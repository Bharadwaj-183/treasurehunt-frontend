import DoorList from "./DoorList";
import { useEffect } from "react";
import useSound from "use-sound";
import "./Stage4.css";
const Stage4 = () => {
  const levelAudio = process.env.PUBLIC_URL + "/audios/levelup.wav";
  const [playLevel] = useSound(levelAudio);
  useEffect(() => {
    playLevel();
  }, [playLevel]);
  return (
    <div id="stage4Div">
      <div>
        <p>Great Progress ...</p>
      </div>
      <br />
      <div>
        <h3>
          Looks like there are multiple doors here. Find the right one out.
        </h3>
      </div>
      <DoorList />
    </div>
  );
};

export default Stage4;
