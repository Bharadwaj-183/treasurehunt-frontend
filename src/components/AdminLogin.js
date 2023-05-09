import "./AdminLogin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currentActions } from "../store/current-slice";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [adminEmail, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");

  // const users = useSelector((state) => state.user);
  // console.log(users);
  // console.log(users);
  // useEffect(()=>{

  // } ,[])
  const handleLogin = () => {
    // const userFound = users.find((item) => item.userId === userId);
    // console.log(userFound);
    // if (userFound) {
    //   if (userFound.password === password) {
    //     dispatch(currentActions.setCurrent(userId));
    //     navigate("/admin/welcome");
    //   }
    // } else {
    //   navigate("/admin/error");
    // }

    if (adminEmail === "bharadwajkvsm@gmail.com") {
      if (password === "Bharadwaj183") {
        navigate("/admin/dashboard");
      } else {
        navigate("/admin/error");
      }
    } else {
      navigate("/admin/error");
    }
  };
  return (
    <div id="pirateHome">
      <div id="pirateDiv">
        Enter admin Email :{" "}
        <input
          onChange={(event) => setAdminEmail(event.target.value)}
          type="email"
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
        {/* New User ? <br />
        <a href="/piratesignup"> SignUp</a> */}
      </div>
    </div>
  );
};

export default AdminLogin;
