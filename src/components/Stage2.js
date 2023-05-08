import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./ClueModal/Modal/Modal";
import Backdrop from "./ClueModal/Backdrop/Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import useSound from "use-sound";
import "./Stage2.css";

let startTime, endTime;

const Stage2 = () => {
  const bonusAudio = process.env.PUBLIC_URL + "/audios/bonus.wav";
  const [playBonus] = useSound(bonusAudio);
  const levelAudio = process.env.PUBLIC_URL + "/audios/levelup.wav";
  const [playLevel] = useSound(levelAudio);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [answer2, setAnswer2] = useState("");
  const [hint2, setHint2] = useState(false);
  const [wrong2, setWrong2] = useState(false);
  const [viewbutton, setViewbutton] = useState(false);

  //just to check if prev level's time is available here
  // const currentUser = useSelector((state) => state.current.currentUser); // getting current user's name
  // const users = useSelector((state) => state.user); //getting list of all users
  // const currentData = users.find((item) => item.userId === currentUser); //finding current users data
  // console.log("stage1Time inside stage2", currentData.stage1Time); // retrieving his stage1 time

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentUser = useSelector((state) => state.current.currentUser);

  useEffect(() => {
    playLevel();
    startTime = Date.now(); // notes the start time
  }, [playLevel]);

  const closeModal = async () => {
    setModalIsOpen(false);
    endTime = Date.now(); // notes end time
    var elapsedTime = endTime - startTime;
    elapsedTime /= 60000;

    const stage2Points = 5 - Math.floor(Math.floor(elapsedTime) / 5);

    const response = await fetch(
      "https://treasurehunt-sigma.vercel.app/demo/update2",
      {
        method: "POST",
        body: JSON.stringify({
          userId: currentUser,
          stage2Time: elapsedTime,
          stage2Points: stage2Points,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => console.log("response stage1", response.json()));

    console.log(response);

    dispatch(
      userActions.setStage2Time({ userId: currentUser, time: elapsedTime })
    );
    dispatch(
      userActions.setStage2Points({
        userId: currentUser,
        points: 5 - Math.floor(Math.floor(elapsedTime) / 5),
      })
    );

    setTimeout(() => {
      navigate("/pirate/stage3");
    }, 1000);
  };

  const handleCheck2 = () => {
    if (answer2) {
      if (answer2.toLowerCase() === "elitmus") {
        // navigate("/pirate/stage3");
        playBonus();
        setModalIsOpen(true);
      } else {
        setWrong2(true);
      }
    } else {
      setWrong2(true);
    }
  };

  const handleHint2 = () => {
    setHint2(true);
  };

  setTimeout(() => {
    setViewbutton(true);
  }, 90000);

  return (
    <div id="stage2Div">
      <Modal show={modalIsOpen} closed={closeModal} data={"AD"} />
      <Backdrop />

      <div id="stage2Text">
        <p>Nice! Lets take it a step ahead.</p>
        <br />
        <h1>Decode the images.</h1>

        {/* <br /> */}
        <p>find the word to get your next clue.</p>
        <br />
      </div>

      <div id="stage2Div2">
        <div id="images3">
          <img className="stage2img" src="/images/plus.png" />
          <img className="stage2img" src="/images/tile.jpg" />
          <img className="stage2img" src="/images/arr.png" />
        </div>

        <div id="answerDiv">
          <input
            className="answerInput"
            type="text"
            onChange={(event) => setAnswer2(event.target.value)}
          ></input>
          <button onClick={handleCheck2} className="piratebtn default">
            Check
          </button>
          {wrong2 && <p id="wrongAnswer">Oops !! wrong answer.</p>}
        </div>
      </div>

      <div id="sayingDiv">
        {hint2 && (
          <div className="move" id="thinkDiv">
            <p id="dialogue">
              image 1 - noun
              <br />
              image 2 - noun <br />
              image 3 - verb <br />
              image1- 3letter
            </p>
          </div>
        )}
        {viewbutton && (
          <button id="help" onClick={handleHint2} className="piratebtn info">
            Help me Jack
          </button>
        )}
        <span>
          <img
            className="move"
            id="jackStage2Image"
            src="/images/pic2-opp.webp"
          />
        </span>
      </div>

      <p className="jackshint">ps: Jack's hint available for this round</p>
    </div>
  );
};

export default Stage2;
