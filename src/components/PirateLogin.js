import "./PirateLogin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentActions } from "../store/current-slice";
import { fetchAllUsers } from "../store/user-slice";

const PirateLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nouser, setNouser] = useState(false);
  const users = useSelector((state) => state.user);
  const currentUser = useSelector((state) => state.current.currentUser);
  // console.log(users);
  // console.log(users);
  useEffect(() => {
    dispatch(fetchAllUsers());
    return () => {};
  }, [dispatch]);

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
  //   return response;
  //   // console.log("in frontemd", data);
  // };

  const checkLogin = async () => {
    const response = await fetch(
      "https://treasurehunt-back.vercel.app/demo/login",
      {
        method: "POST",
        body: JSON.stringify({ userId: userId, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.status === 404) {
          // console.log("errorrrr");
          setNouser(true);
        } else {
          setNouser(false);
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("response in checklogin", response);

    // const ans = response.text();
    // console.log(ans);
    return response;
  };

  const handleLogin = async () => {
    // console.log(userId);
    // console.log(password);
    // console.log(props.users);
    // const userFound = users.find((item) => item.userId === userId);
    // // console.log(userFound);
    // if (userFound) {
    //   if (userFound.password === password) {
    //     dispatch(currentActions.setCurrent(userId));
    //     navigate("/pirate/welcome");
    //   }
    // } else {
    //   navigate("/pirate/error");
    // }
    const res = await checkLogin();
    console.log("ans", res);
    if (res.userId === userId) {
      dispatch(currentActions.setCurrent(userId));
      console.log("current user", currentUser);
      navigate("/pirate/welcome");
    } else {
      // console.log(res);
    }
  };

  const handleSignup = () => {
    navigate("/piratesignup");
  };
  return (
    <div id="pirateHome">
      <div id="pirateDiv">
        Enter userId :{" "}
        <input
          onChange={(event) => setUserId(event.target.value)}
          type="text"
        />
        <br />
        Enter Password :{" "}
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <br />
        {/* <button onClick={handleLogin}>Login</button> */}
        <button className="piratebtn success" onClick={handleLogin}>
          Login
        </button>
        <br />
        New User ? <br />
        <button className="piratebtn success" onClick={handleSignup}>
          SignUp
        </button>
        {/* <a href="/piratesignup"> </a> */}
        {nouser && <p id="wrongAnswer">Invalid userId or password</p>}
      </div>
    </div>
  );
};

export default PirateLogin;
