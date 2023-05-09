import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";

import "./PirateSignup.css";

const PirateSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const users = props.users;
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.user);

  const handleClick = () => {
    // users.push({ userId, password });
    const postData = async () => {
      const response = await fetch(
        "https://treasurehunt-sigma.vercel.app/demo",
        {
          method: "POST",
          body: JSON.stringify({
            userId: userId,
            password: password,
            stage1Time: 0,
            stage2Time: 0,
            stage3Time: 0,
            stage4Time: 0,
            stage5Time: 0,
            stage1Points: 0,
            stage2Points: 0,
            stage3Points: 0,
            stage4Points: 0,
            stage5Points: 0,
            overallPoints: 0,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.text();
      console.log("in piratesignup", data);
    };

    postData();
    dispatch(
      userActions.setUser({
        userId: userId,
        password: password,
        stage1Time: 0,
        stage2Time: 0,
        stage3Time: 0,
        stage4Time: 0,
        stage5Time: 0,
        stage1Points: 0,
        stage2Points: 0,
        stage3Points: 0,
        stage4Points: 0,
        stage5Points: 0,
        overallPoints: 0,
      })
    );
    console.log("users after setting", users);
    navigate("/pirate");
  };
  return (
    <div id="pirateHome">
      <div id="pirateDiv">
        Enter Email : <input type="email" />
        <br />
        Enter userId :{" "}
        <input
          type="text"
          onChange={(event) => setUserId(event.target.value)}
        />
        <br />
        New Password : <input type="password" />
        <br />
        Confirm Password :{" "}
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button className="piratebtn success" onClick={handleClick}>
          SignUp
        </button>
      </div>
    </div>
  );
};

export default PirateSignup;
