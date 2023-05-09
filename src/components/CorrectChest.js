import "./CorrectChest.css";
import { useNavigate } from "react-router-dom";
import Modal from "./ClueModal/Modal/Modal";
import Backdrop from "./ClueModal/Backdrop/Backdrop";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";
import useSound from "use-sound";
let startTime, endTime;

const CorrectChest = () => {
  const bonusAudio = process.env.PUBLIC_URL + "/audios/bonus.wav";
  const [playBonus] = useSound(bonusAudio);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentUser = useSelector((state) => state.current.currentUser);

  useEffect(() => {
    startTime = Date.now(); // notes the start time
  }, []);

  const closeModal = async () => {
    setModalIsOpen(false);
    endTime = Date.now(); // notes end time
    var elapsedTime = endTime - startTime;
    elapsedTime /= 60000;

    const stage4Points = 5 - Math.floor(Math.floor(elapsedTime) / 5);

    const response = await fetch(
      "https://treasurehunt-sigma.vercel.app/demo/update4",
      {
        method: "POST",
        body: JSON.stringify({
          userId: currentUser,
          stage4Time: elapsedTime,
          stage4Points: stage4Points,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => console.log("response stage1", response.json()));

    console.log(response);

    dispatch(
      userActions.setStage4Time({ userId: currentUser, time: elapsedTime })
    );

    dispatch(
      userActions.setStage4Points({
        userId: currentUser,
        points: 5 - Math.floor(Math.floor(elapsedTime) / 5),
      })
    );
    setTimeout(() => {
      navigate("/pirate/stage5");
    }, 1000);
  };

  const [best, setBest] = useState("");
  const [wrong4, setWrong4] = useState(false);
  const handleCheck = () => {
    if (best) {
      if (best.toLowerCase() === "jack") {
        playBonus();
        setModalIsOpen(true);
      } else {
        setWrong4(true);
      }
    } else {
      setWrong4(false);
    }
  };
  return (
    <div id="correctchest">
      <Modal show={modalIsOpen} closed={closeModal} data={"RACS"} />
      <Backdrop />
      <p>Great!! You have come so faar.</p>
      <p>Looks like you found something </p>
      <h1>Tell me your best friend namee :) </h1>
      <p>And I will give you the last piece of clue</p>
      <input
        type="text"
        className="answerInput"
        onChange={(event) => {
          setBest(event.target.value);
        }}
      />
      {wrong4 && <p id="wrongAnswer">Oops !! wrong answer.</p>}
      <button className="piratebtn default" onClick={handleCheck}>
        Check
      </button>
      <hr id="line" />

      <p id="hint">hint : someone is missing here</p>

      <p className="jackshint">ps: Jack's hint NOT available for this round</p>
    </div>
  );
};

export default CorrectChest;
