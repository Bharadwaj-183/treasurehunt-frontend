import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../store/user-slice";
import useSound from "use-sound";
import "./Stage5.css";

let startTime, endTime, overallPoints;
const Stage5 = () => {
  const bonusAudio = process.env.PUBLIC_URL + "/audios/bonus.wav";
  const [playBonus] = useSound(bonusAudio);
  const levelAudio = process.env.PUBLIC_URL + "/audios/levelup.wav";
  const [playLevel] = useSound(levelAudio);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [answer5, setAnswer5] = useState("");
  const [wrong5, setWrong5] = useState(false);

  const currentUser = useSelector((state) => state.current.currentUser);
  const users = useSelector((state) => state.user);
  const currentData = users.find((item) => item.userId === currentUser);

  overallPoints =
    currentData.stage1Points +
    currentData.stage2Points +
    currentData.stage3Points +
    currentData.stage4Points;

  // console.log(currentData);
  useEffect(() => {
    playLevel();
    startTime = Date.now(); // notes the start time
  }, [playLevel]);

  const handleClick5 = async () => {
    if (answer5) {
      if (answer5.toLowerCase() === "madagascar") {
        playBonus();
        endTime = Date.now(); // notes end time
        var elapsedTime = endTime - startTime;
        elapsedTime /= 60000;

        const stage5Points = 5 - Math.floor(Math.floor(elapsedTime) / 5);
        overallPoints += 5 - Math.floor(Math.floor(elapsedTime) / 5);

        const response = await fetch(
          "https://treasurehunt-sigma.vercel.app/demo/update5",
          {
            method: "POST",
            body: JSON.stringify({
              userId: currentUser,
              stage5Time: elapsedTime,
              stage5Points: stage5Points,
              overallPoints: overallPoints,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((response) => console.log("response stage1", response.json()));

        console.log(response);

        dispatch(
          userActions.setStage5Time({ userId: currentUser, time: elapsedTime })
        );
        dispatch(
          userActions.setStage5Points({
            userId: currentUser,
            points: 5 - Math.floor(Math.floor(elapsedTime) / 5),
          })
        );

        dispatch(
          userActions.setOverallPoints({
            userId: currentUser,
            points: overallPoints / 5,
          })
        );

        setTimeout(() => {
          navigate("/pirate/success");
        }, 1000);
      } else {
        setWrong5(true);
      }
    } else {
      setWrong5(true);
    }
  };
  return (
    <div id="stage5Div">
      <h1>Welcome to the last round of the treasure hunt!!!</h1>
      <p>You have already got everything you need to get the treasure.</p>

      <p>
        Name that island where BlackBeard hid his treasure and the Treasure is
        yours.
      </p>

      <input
        onChange={(event) => {
          setAnswer5(event.target.value);
        }}
        className="answerInput"
        type="text"
      ></input>
      <button className="piratebtn default" onClick={handleClick5}>
        Check
      </button>
      {wrong5 && (
        <p className="redline" id="wrongAnswer">
          Oops !! wrong answer.
        </p>
      )}
      <hr id="line" />
      <p id="hint">
        <pre>Hint : {"<- + <- + <- + <-"} </pre>
      </p>
      <div id="sayingDiv5">
        <span>
          <img className="move" id="jackStage5Image" src="/images/pic2.webp" />
        </span>
      </div>
      <p className="jackshint">ps: Jack's hint NOT available for this round</p>
    </div>
  );
};

export default Stage5;
