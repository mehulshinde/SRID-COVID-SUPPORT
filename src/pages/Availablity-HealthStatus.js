import "../styles/App.css";
import "../styles/Availablity-HealthStatus.css"
import Calendar from "../calendar/Calendar";
import { useHistory } from "react-router-dom";

export default function AvailablityHealthStatus() {
  const history = useHistory();

  function handleSubmit(event) {
    if (
      event.target.elements.breathe.checked ||
      event.target.elements.fever.checked ||
      event.target.elements.cold.checked ||
      event.target.elements.sense.checked ||
      event.target.elements.fatigue.checked ||
      event.target.elements.bodyaches.checked
    ) {
      alert(
        "Covid Symptoms.Not Eligible for Volunteering. Disable for 14 days"
      );
      // TODO: Disable volunteer and Redirect to Dashboard
      history.push("/volunteer-dashboard");
    } else {
      alert("Updated");
      // TODO: Redirect to Dashboard
      history.push("/volunteer-dashboard");
    }
    event.preventDefault();
  }

  return (
    <>
      <div className="back">
        <div className="library-fontello">
          <i
            className="icon-left-open"
            onClick={() => {
              history.push("/volunteer-dashboard");
            }}
          ></i>
        </div>
      </div>
      <div className="title">
        <h1>Availability and Health Status</h1>
      </div>

      <div className="body">
        <form onSubmit={handleSubmit}>
          <br />
          <div>
            <h2>Current Health Conditions (tick all that apply)</h2>
          </div>
          <br />
          <fieldset>
            <div>
              <input
                type="checkbox"
                id="breathe"
                name="breathe"
                className="input-checkbox"
              />
              <label htmlFor="breathe">Breathing Issues</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="fever"
                name="fever"
                className="input-checkbox"
              />
              <label htmlFor="fever">Fever</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="cold"
                name="cold"
                className="input-checkbox"
              />
              <label htmlFor="cold">Cold/Cough</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="sense"
                name="sense"
                className="input-checkbox"
              />
              <label htmlFor="sense">Lost sense of smell/taste</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="fatigue"
                name="fatigue"
                className="input-checkbox"
              />
              <label htmlFor="fatigue">Fatigue</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="bodyaches"
                name="bodyaches"
                className="input-checkbox"
              />
              <label htmlFor="bodyaches">Body Aches</label>
            </div>
          </fieldset>
          <br />
          <div>
            <h2>Availability</h2>
          </div>
          <br />
          <div className="calendar">
            <Calendar />
          </div>
          <br />
          <div align="center">
            <input
              type="submit"
              className="btn-primary btn"
              value="Update"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}
