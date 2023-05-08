import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Home from "./components/Home";
import PirateLogin from "./components/PirateLogin";
import AdminLogin from "./components/AdminLogin";
import PirateSignup from "./components/PirateSignup";
import WelcomePirate from "./components/WelcomePirate";
import Error from "./components/Error";
import AdminDashboard from "./components/AdminDashboard";
import Modal from "./components/ClueModal/Modal/Modal";
import Backdrop from "./components/ClueModal/Backdrop/Backdrop";

import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";
import Stage3 from "./components/Stage3";
import Stage4 from "./components/Stage4";
import Stage5 from "./components/Stage5";

import Door1 from "./components/Door1";
import Door2 from "./components/Door2";
import Door3 from "./components/Door3";

import Deadend from "./components/Deadend";
import EmptyChest from "./components/EmptyChest";
import CorrectChest from "./components/CorrectChest";
import Treasure from "./components/Treasure";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // function confirmExit() {
  //   alert("exiting");
  //   window.location.href = "index.html";
  //   return true;
  // }
  // window.onbeforeunload = confirmExit;
  // window.onbeforeunload = function () {
  //   return "Data will be lost if you leave the page, are you sure?";
  // };
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";

    // Display modal asking for confirmation
    const confirmRefresh = window.prompt(
      "Are you sure you want to refresh the page? Any unsaved changes will be lost."
    );

    if (confirmRefresh) {
      // Continue with page refresh
      window.location.reload();
    }
  });

  // useEffect(() => {
  //   const unloadCallback = (event) => {
  //     // window.confirm("hello");
  //     // setModalIsOpen(true);
  //     event.preventDefault();
  //     event.returnValue = "";
  //     // return "";
  //     const confirm = confirm("Are you sure");
  //     console.log("beforeunload");
  //     setTimeout(() => {}, 1000);

  //     // window.location.href = "/";
  //   };

  //   window.addEventListener("beforeunload", unloadCallback);
  //   // window.addEventListener("unload", handleReload);
  //   return () => {
  //     window.removeEventListener("beforeunload", unloadCallback);
  //     // window.removeEventListener("unload", handleReload);
  //   };
  // }, []);

  const closeModal = () => {};
  // const handleReload = () => {
  //   window.location.href = "localhost:3000/pirate";
  // };

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   window.addEventListener("pagehide", handleUnload);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //     window.removeEventListener("pagehide", handleUnload);
  //   };
  // }, []);

  // const handleUnload = (event) => {
  //   alert("handle unload called");
  //   const confirmMessage =
  //     "Your progress will be lost. Are you sure you want to leave?";
  //   if (!window.confirm(confirmMessage)) {
  //     event.preventDefault();
  //   } else {
  //     window.location.href = "localhost:3000";
  //   }
  // };

  // const history = useHistory();

  // useEffect(() => {
  //   const handleRefresh = (e) => {
  //     e.preventDefault();
  //     e.returnValue = ""; // required for Chrome
  //     <Redirect to="/pirate" />; // redirect to home page
  //   };

  //   window.addEventListener("beforeunload", handleRefresh);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleRefresh);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleRefresh = (e) => {
  //     e.preventDefault();
  //     e.returnValue = ""; // required for Chrome
  //     history.push("/"); // redirect to home page
  //   };

  //   window.addEventListener("beforeunload", handleRefresh);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleRefresh);
  //   };
  // }, [history]);

  // useEffect(() => {

  //   return () => {
  //   };
  // }, []);

  const users = [{ userId: "bharadwaj", password: "1234567" }];
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/pirate", element: <PirateLogin users={users} /> },
    { path: "/admin", element: <AdminLogin /> },
    { path: "/admin/dashboard", element: <AdminDashboard /> },
    { path: "/admin/error", element: <Error /> },
    { path: "/piratesignup", element: <PirateSignup users={users} /> },
    { path: "/pirate/welcome", element: <WelcomePirate /> },
    { path: "/pirate/error", element: <Error /> },
    { path: "/pirate/stage1", element: <Stage1 /> },
    { path: "/pirate/stage2", element: <Stage2 /> },
    { path: "/pirate/stage3", element: <Stage3 /> },
    { path: "/pirate/stage4", element: <Stage4 /> },
    { path: "/pirate/stage4/door1", element: <Door1 /> },
    { path: "/pirate/stage4/door2", element: <Door2 /> },
    { path: "/pirate/stage4/door3", element: <Door3 /> },
    { path: "/pirate/stage4/deadend", element: <Deadend /> },
    { path: "/pirate/stage4/emptychest", element: <EmptyChest /> },
    { path: "/pirate/stage4/correctchest", element: <CorrectChest /> },
    { path: "/pirate/stage5", element: <Stage5 /> },
    { path: "/pirate/success", element: <Treasure /> },
  ]);

  return (
    <RouterProvider router={router}>
      <Modal show={modalIsOpen} closed={closeModal} data={"AM"} />
      <Backdrop />
    </RouterProvider>
  );
}

export default App;
