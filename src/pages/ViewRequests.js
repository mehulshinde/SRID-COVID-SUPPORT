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
      <div class="title">
        <h1>Requests</h1>
      </div>

      <div className="body">
        {/* <div class="table"> */}
        <h2>Requests for Today</h2>
        {/* <div align="center" class="table">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>By</th>
                <th>Type</th>

              </tr>
            </thead>

            <tr
              class="request-clickable"
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
            </tr>
          </table>
        </div> */}
        <div class="requests">
          <div
            class="request-1-head"
            onClick={() => {
              handleListItem("request1");
              requestFor = "Mary";
              history.push("/delivery-request");
            }}
          >
            <div class="picture mary">
              <img alt="" src="\src\logo_light.png" />
            </div>
            <div class="req-item">
              <div class="request-name">Mary's Subscription Request</div>
              <div class="request-time">6:00 P.M.</div>
            </div>
          </div>
          <div
            class="request-1-head"
            onClick={() => {
              requestFor = "Paul";
              handleListItem("request2");
              history.push("/delivery-request-active");
            }}
          >
            <div class="picture paul"></div>
            <div class="req-item">
              <div class="request-name">Paul's On-demand Request</div>
              <div class="request-time">8:00 P.M.</div>
            </div>
          </div>
        </div>
        <br />
        <h2>Requests for the Week </h2>
        <br />
        {/* </div> */}

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
