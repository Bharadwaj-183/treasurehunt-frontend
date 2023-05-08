import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./ClueModal/Modal/Modal";
import Backdrop from "./ClueModal/Backdrop/Backdrop";
import { userActions } from "../store/user-slice";
import useSound from "use-sound";
import "./Stage3.css";

let startTime, endTime;

const Stage3 = () => {
  const bonusAudio = process.env.PUBLIC_URL + "/audios/bonus.wav";
  const [playBonus] = useSound(bonusAudio);

  const levelAudio = process.env.PUBLIC_URL + "/audios/levelup.wav";
  const [playLevel] = useSound(levelAudio);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [answer3, setAnswer3] = useState("");
  const [hint3, setHint3] = useState(false);
  // const [wrong, setWrong] = useState(false);
  const [viewbutton, setViewbutton] = useState(false);
  //   const [ans , showAns] = useState(false);
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

    const stage3Points = 5 - Math.floor(Math.floor(elapsedTime) / 5);

    const response = await fetch(
      "https://treasurehunt-back.vercel.app/demo/update3",
      {
        method: "POST",
        body: JSON.stringify({
          userId: currentUser,
          stage3Time: elapsedTime,
          stage3Points: stage3Points,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => console.log("response stage1", response.json()));

    console.log(response);

    dispatch(
      userActions.setStage3Time({ userId: currentUser, time: elapsedTime })
    );

    dispatch(
      userActions.setStage3Points({
        userId: currentUser,
        points: 5 - Math.floor(Math.floor(elapsedTime) / 5),
      })
    );

    setTimeout(() => {
      navigate("/pirate/stage4");
    }, 1000);
  };

  const handleClick3 = () => {
    playBonus();
    setModalIsOpen(true);
  };

  const handleHint3 = () => {
    setHint3(true);
  };

  setTimeout(() => {
    setViewbutton(true);
  }, 90000);

  return (
    <div id="stage3Div">
      <Modal show={modalIsOpen} closed={closeModal} data={"AG"} />
      <Backdrop />
      <p>Good.!! Let's give some task to the brains.</p>
      <h1>
        Guess the shift and Decipher the ceaser te
        <b className="logo is-animetion">
          <span>X</span>
        </b>
        t.{" "}
      </h1>
      <p>(read it again)</p>
      Ceaser Text :{" "}
      <i className="logo is-animetion">
        <span>G bml</span>
        <span>r ilm</span>
        <span>u ufw</span>
        <span> zsr </span>
        <span>hyai'</span>
        <span>q fyr</span>
        <span> gq q</span>
        <span>sqnga</span>
        <span>gmsq.</span>
        {/* G bmlr ilmu ufw zsr hyai'q fyr gq qsqngagmsq. */}
      </i>
      <p>
        what is{" "}
        <a href="https://cryptii.com/pipes/caesar-cipher">ceaser cipher</a>
      </p>
      <p></p>
      <textarea id="textarea" placeholder="workspace"></textarea>
      <div id="sayingDiv3">
        <span>
          <span>
            <a id="clickme" onClick={handleClick3}>
              click me{" "}
            </a>
          </span>
          <img
            className="move2"
            id="jackStage1Image"
            src="/images/pic2.webp"
            alt="jacksparrow"
          />
        </span>

        {hint3 && (
          <div className="move2" id="thinkDiv3">
            <p id="dialogue">
              Position of
              <br /> only alphabet <br />
              pirate uses.
              <br />
            </p>
          </div>
        )}
      </div>
      {viewbutton && (
        <button id="help1" onClick={handleHint3} className="piratebtn info">
          Help me Jack
        </button>
      )}
      <p className="jackshint">ps: Jack's hint available for this round</p>
    </div>
  );
};

export default Stage3;
