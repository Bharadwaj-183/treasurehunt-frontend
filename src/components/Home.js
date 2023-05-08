import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
// import url from "../../public/audios/start.mp3";
// import ReactModal from "./ReactModal";
import MyModal from "./ClueModal/MyModal";
import Door from "./Door";
const Home = () => {
  // const startAudio = process.env.PUBLIC_URL + "/audios/start.mp3";
  const startAudio = process.env.PUBLIC_URL + "/audios/Sneaky-Snitch.mp3";
  const [playStart] = useSound(startAudio);

  const [confirmedLeave, setConfirmedLeave] = useState(false);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     window.alert("before unload");
  //     if (!confirmedLeave) {
  //       event.preventDefault();
  //       event.returnValue =
  //         "Your progress will be lost. Are you sure you want to leave?";
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [confirmedLeave]);

  // const handleConfirmLeave = () => {
  //   setConfirmedLeave(true);
  //   window.location.href = "/";
  // };

  // useEffect(() => {
  //   if (confirmedLeave) {
  //     handleConfirmLeave();
  //   }
  // }, [confirmedLeave]);

  // var audio = new Audio(url);
  // const Playit = () => {
  //   audio.play();
  // };

  // const postData = async () => {
  //   const response = await fetch("http://localhost:8080/demo", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userId: "bharadwaj",
  //       password: "1234567",
  //       stage1Time: 0,
  //       stage2Time: 0,
  //       stage3Time: 0,
  //       stage4Time: 0,
  //       stage5Time: 0,
  //       stage1Points: 0,
  //       stage2Points: 0,
  //       stage3Points: 0,
  //       stage4Points: 0,
  //       stage5Points: 0,
  //       overallPoints: 0,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.text();
  //   console.log("in frontemd", data);
  // };
  useEffect(() => {
    // Playit();
    // postData();
    playStart();
    return () => {};
  }, [playStart]);

  const navigate = useNavigate();
  const handlePirate = () => {
    navigate("/pirate");
  };

  const handleAdmin = () => {
    navigate("/admin");
  };
  return (
    <div id="homeDiv">
      <audio src="/audios/start.mp3" autoplay></audio>
      <h1 id="homeHead">Welcome to THE TREASURE HUNT!</h1>
      <h5>Login to continue.</h5>
      <button className="btn danger" onClick={handlePirate}>
        Pirate Login
      </button>
      <br />
      <button className="btn success" onClick={handleAdmin}>
        Admin Login
      </button>
      {/* <MyModal /> */}
      {/* <Door /> */}
    </div>
  );
};

export default Home;
