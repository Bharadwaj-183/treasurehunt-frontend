import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { currentActions } from "../store/current-slice";
import { userActions } from "../store/user-slice";
import { useSelector } from "react-redux";
import Modal from "./ClueModal/Modal/Modal";
import Backdrop from "./ClueModal/Backdrop/Backdrop";
import "./Stage1.css";
import useSound from "use-sound";
let startTime, endTime; // if declared inside STage1 function ,they are not accessible in closeMOdal functionn below

const Stage1 = () => {
  const bonusAudio = process.env.PUBLIC_URL + "/audios/bonus.wav";
  const [playBonus] = useSound(bonusAudio);

  const levelAudio = process.env.PUBLIC_URL + "/audios/levelup.wav";
  const [playLevel] = useSound(levelAudio);
  // if (window.performance) {
  //   console.info("window.performance works fine on this browser");
  // }
  // const pageAccessedByReload =
  //   (window.performance.navigation &&
  //     window.performance.navigation.type === 1) ||
  //   window.performance
  //     .getEntriesByType("navigation")
  //     .map((nav) => nav.type)
  //     .includes("reload");

  // alert(pageAccessedByReload);
  // console.info(performance.navigation.type);
  // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  //   console.info("This page is reloaded");
  // } else {
  //   console.info("This page is not reloaded");
  // }

  console.log("userActions", userActions);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [hint1, setHint1] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [viewbutton, setViewbutton] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const currentUser = useSelector((state) => state.current.currentUser);
  console.log("current in stage1", currentUser);

  // const postDB = async () => {
  //   const response = await fetch("http://localhost:8080/demo", {
  //     method: "POST",
  //     body: JSON.stringify({ name: "shanmukh", password: "1234567" }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.text();
  // };

  useEffect(() => {
    playLevel();
    startTime = Date.now(); // notes the start time
    return () => {};
  }, [playLevel]);

  const closeModal = async () => {
    setModalIsOpen(false);
    endTime = Date.now(); // notes end time
    var elapsedTime = endTime - startTime;
    elapsedTime /= 60000;

    // const response = await fetch("http://localhost:8080/demo", {
    //   method: "POST",
    //   body: JSON.stringify({ name: "shanmukh", password: "1234567" }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await response.text();
    const stage1Points = 5 - Math.floor(Math.floor(elapsedTime) / 5);

    const response = await fetch(
      "https://treasurehunt-back.vercel.app/demo/update1",
      {
        method: "POST",
        body: JSON.stringify({
          userId: currentUser,
          stage1Time: elapsedTime,
          stage1Points: stage1Points,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => console.log("response stage1", response.json()));

    console.log(response);

    dispatch(
      userActions.setStage1Time({ userId: currentUser, time: elapsedTime })
    );

    dispatch(
      userActions.setStage1Points({
        userId: currentUser,
        points: 5 - Math.floor(Math.floor(elapsedTime) / 5),
      })
    );

    setTimeout(() => {
      navigate("/pirate/stage2");
    }, 1000);
  };

  const handleCheck = () => {
    if (answer) {
      if (answer.toLowerCase() === "treasure") {
        playBonus();
        setModalIsOpen(true);
      } else {
        setWrong(true);
      }
    } else {
      setWrong(true);
    }
  };

  const handleHint = () => {
    setHint1(true);
  };

  setTimeout(() => {
    setViewbutton(true);
  }, 120000);

  return (
    <div id="stage1Div">
      <Modal show={modalIsOpen} closed={closeModal} data={"AM"} />
      <Backdrop />

      <p className="logo is-animetion">
        <span>
          <pre></pre>
        </span>
        <span>I'm burie</span>
        <span>d on an i</span>
        <span>sland, hi</span>
        <span>dden from </span>
        <span> view. Yo</span>
        <span>u'll need </span>
        <span> a map an</span>
        <span>d a shove</span>
        <span>l too. Wh</span>
        <span>at am I?</span>
        {/* "I'm buried on an island, hidden from view. You'll need a map and a
        shovel too. What am I?" */}
      </p>
      <p>Solve me to go further.</p>

      <input
        className="answerInput"
        type="text"
        onChange={(event) => setAnswer(event.target.value)}
      ></input>
      <button onClick={handleCheck} className="piratebtn default">
        Check
      </button>

      {wrong && <p id="wrongAnswer">Oops !! wrong answer.</p>}
      <div id="sayingDiv1">
        <span>
          <img
            className="move"
            id="jackStage1Image"
            src="/images/pic2.webp"
            alt="jacksparrow"
          />
        </span>

        {hint1 && (
          <div className="move" id="thinkDiv1">
            <p id="dialogue">
              Sounds like something
              <br /> valuable
            </p>
          </div>
        )}
      </div>

      {viewbutton && (
        <button id="help1" onClick={handleHint} className="piratebtn info">
          Help me Jack
        </button>
      )}

      <p className="jackshint">ps: Jack's hint available for this round</p>
    </div>
  );
};

export default Stage1;
