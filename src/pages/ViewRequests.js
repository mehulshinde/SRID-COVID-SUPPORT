import "../styles/App.css";
import { useState } from "react";

import { useHistory } from "react-router-dom";
import Calendar from "../calendar/calendar2";

export let requestFor = "";

export default function ViewRequests() {
  const history = useHistory();
  const [r1status, setR1Status] = useState("Received");
  const [r2status, setR2Status] = useState("Received");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleListItem(e) {
    if (e == "request1") {
      setR1Status("Done");
    } else {
      setR2Status("Done");
    }
  }

  return (
    <>
      <div className="library-fontello">
        <i
          className="icon-left-open back"
          onClick={() => {
            history.push("/volunteer-dashboard");
          }}
        ></i>
      </div>
      <div className="title">
        <h2>Your Service Requests</h2>
      </div>

      <div className="body">
        <div class="table">
          <div>
            <h2>Upcoming Requests Today</h2>

            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>By</th>
                  <th>Type</th>

                  {/* <th>
                    {" "}
                    <div className="library-fontello">
                      <i class="icon-basket"></i> Status{" "}
                    </div>
                  </th> */}
                </tr>
              </thead>

              <tr
                id="request1"
                onClick={() => {
                  handleListItem("request1");
                  requestFor = "Mary";
                  history.push("/delivery-request");
                }}
              >
                <td>6 PM</td>
                <td>Mary</td>
                <td>Subscription</td>
                <div>{/* <td>{r1status}</td> */}</div>
              </tr>

              <tr
                id="request2"
                onClick={() => {
                  requestFor = "Paul";
                  handleListItem("request2");
                  history.push("/delivery-request-active");
                }}
              >
                <td>8 PM</td>
                <td>Paul</td>
                <td>On-Demand</td>
                {/* <td>{r2status}</td> */}
              </tr>
            </table>
          </div>
          <br />
          <h2>Upcoming requests this Week </h2>
          <br />
        </div>

        <div align="center"></div>
        <div class="ex1">
          <div className="calendar">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}
