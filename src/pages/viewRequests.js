import "../styles/App.css";
import { useHistory } from "react-router-dom";
import Calendar from "../calendar/calendar2";

export default function ViewRequests() {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
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

                  <th>
                    {" "}
                    <div className="library-fontello">
                      <i class="icon-basket"></i> Status{" "}
                    </div>
                  </th>
                </tr>
              </thead>

              <tr
                onClick={() => {
                  history.push("/delivery-request");
                }}
              >
                <td>6 PM</td>
                <td>Mary</td>
                <td>Subscription</td>
                <div>
                  <td>Received</td>
                </div>
              </tr>

              <tr>
                <td>8 PM</td>
                <td>Paul</td>
                <td>On-Demand</td>
                <a href="#">
                  <td>Received</td>
                </a>
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
