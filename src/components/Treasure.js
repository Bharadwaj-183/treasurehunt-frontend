import { useEffect, useState } from "react";
import "./Treasure.css";
import { useSelector } from "react-redux";
import useSound from "use-sound";
const a = {
  1: "Not bad",
  2: "Average",
  3: "Good",
  4: "Very good",
  5: "Excellent",
};
const Treasure = () => {
  const pirateAudio = process.env.PUBLIC_URL + "/audios/pirate.mp3";
  const [playPirate] = useSound(pirateAudio);

  useEffect(() => {
    playPirate();
  }, [playPirate]);

  const users = useSelector((state) => state.user);

  const currentUser = useSelector((state) => state.current.currentUser);
  const currentData = users.find((item) => item.userId === currentUser);
  console.log(currentData);

  const [glitter, setGlitter] = useState(true);
  const [table, setTable] = useState(false);
  const [message, setMessage] = useState(false);
  setTimeout(() => {
    setGlitter(false);
    setTimeout(() => {
      setMessage(true);
      setTimeout(() => {
        setTable(true);
      }, 2000);
    }, 1000);
  }, 5000);

  const overallTime =
    (currentData.stage1Time +
      currentData.stage2Time +
      currentData.stage3Time +
      currentData.stage4Time +
      currentData.stage5Time) /
    5;

  const overallPoints =
    (currentData.stage1Points +
      currentData.stage1Points +
      currentData.stage1Points +
      currentData.stage1Points +
      currentData.stage1Points) /
    5;

  const overallRemarks = a[overallPoints];

  return (
    <div id="treasureDiv">
      {glitter && <div id="glitter"></div>}

      <h1>Boooyaahh!! The Treasure is yourss.</h1>
      <p>Congratulations Pirate!!</p>
      <br />
      {message && (
        <p className="zoom-in-zoom-out">
          Jack has done some assessment on your personality here is his report
          on you.
        </p>
      )}
      {table && (
        <table>
          <tr>
            <td>{currentData.userId}</td>
            <td>Round 1</td>
            <td>Round 2</td>
            <td>Round 3</td>
            <td>Round 4</td>
            <td>Round 5</td>
            <td>Overall</td>
          </tr>
          <tr>
            <td>Time Taken (in minutes)</td>
            <td>{currentData.stage1Time.toFixed(2)}</td>
            <td>{currentData.stage2Time.toFixed(2)} </td>
            <td>{currentData.stage3Time.toFixed(2)} </td>
            <td>{currentData.stage4Time.toFixed(2)} </td>
            <td>{currentData.stage5Time.toFixed(2)} </td>
            <td>{overallTime.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Points (per 5)</td>
            <td>{currentData.stage1Points} </td>
            <td>{currentData.stage2Points} </td>
            <td>{currentData.stage3Points} </td>
            <td>{currentData.stage4Points} </td>
            <td>{currentData.stage5Points} </td>
            <td>{overallPoints}</td>
          </tr>

          <tr>
            <td>Remarks </td>
            <td>{a[currentData.stage1Points]} </td>
            <td>{a[currentData.stage2Points]} </td>
            <td>{a[currentData.stage3Points]} </td>
            <td>{a[currentData.stage4Points]} </td>
            <td>{a[currentData.stage5Points]} </td>
            <td>{overallRemarks}</td>
          </tr>
        </table>
      )}

      {table && (
        <table>
          <tr>
            <th>Round</th>
            <th>SoftSkills Assessed</th>
          </tr>
          <tr>
            <td>Round 1</td>
            <td>
              <b id="softskill">Critical Thinking</b>(Solving Riddle.)
            </td>
          </tr>
          <tr>
            <td>Round 2</td>
            <td>
              <b id="softskill">Verbal Ability</b>(Parts of speech in hint.)
            </td>
          </tr>
          <tr>
            <td>Round 3</td>
            <td>
              <b id="softskill">Problem Solving</b>(Decipher Ceaser Text.)
            </td>
          </tr>
          <tr>
            <td>Round 4</td>
            <td>
              <b id="softskill">Perseverance</b>(Finding right door.)
            </td>
          </tr>
          <tr>
            <td>Round 5</td>
            <td>
              <b id="softskill">Eye for Detail</b>(Hint in the source code.)
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};
export default Treasure;
