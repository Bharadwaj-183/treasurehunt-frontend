// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  // const users = useSelector((state) => state.user);
  const [fetched, setFetched] = useState(false);
  const [outerResponse, setOuterResponse] = useState([]);
  const fetchAllUsers = async () => {
    const response = await fetch("https://treasurehunt-back.vercel.app/demo", {
      method: "GET",
    });
    const data = await response.text();
    console.log(await JSON.parse(data));
    setOuterResponse(JSON.parse(data));
    console.log("type", typeof JSON.parse(data));
    console.log("outerREsonse in useEffect", outerResponse);
    console.log("in Admin Dashboard", data);
  };
  useEffect(() => {
    fetchAllUsers();
    setFetched(true);
    // response = await fetch("http://localhost:8080/demo", {
    //   method: "GET",
    // });
    // console.log("in useEffect", response);
    return () => {};
  }, [fetchAllUsers]);

  return (
    <div id="adminDashboard">
      <h1>Hey Admin! Here is the list of your users and their performance</h1>
      <table>
        <tr>
          <th>User</th>
          <th>
            Round 1<br />
            Time , points
          </th>
          <th>
            Round 2<br />
            Time , points
          </th>
          <th>
            Round 3<br />
            Time , points
          </th>
          <th>
            Round 4<br />
            Time , points
          </th>
          <th>
            Round 5<br />
            Time , points
          </th>
          <th>
            Overall
            <br />
            Time , points
          </th>
        </tr>
        {fetched &&
          outerResponse.map((item) => {
            return (
              <tr>
                <td>{item.userId}</td>
                <td>
                  {item.stage1Time.toFixed(2)}, {item.stage1Points}
                </td>
                <td>
                  {item.stage2Time.toFixed(2)}, {item.stage2Points}
                </td>
                <td>
                  {item.stage3Time.toFixed(2)}, {item.stage3Points}
                </td>
                <td>
                  {item.stage4Time.toFixed(2)}, {item.stage4Points}
                </td>
                <td>
                  {item.stage5Time.toFixed(2)}, {item.stage5Points}
                </td>
                <td>
                  {Math.ceil(
                    (parseInt(item.stage1Time.toFixed(2)) +
                      parseInt(item.stage1Time.toFixed(2)) +
                      parseInt(item.stage1Time.toFixed(2)) +
                      parseInt(item.stage1Time.toFixed(2)) +
                      parseInt(item.stage1Time.toFixed(2))) /
                      5
                  )}
                  , {item.overallPoints}
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default AdminDashboard;
