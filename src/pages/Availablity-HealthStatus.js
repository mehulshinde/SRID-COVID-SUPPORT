import '../styles/App.css';
import '../styles/VolunteerSignup.css';
import React from 'react';

class AvailablityHealthStatus extends React.Component{
    handleSubmit(event) {
        if (event.target.elements.breathe.checked ||
            event.target.elements.fever.checked ||
            event.target.elements.cold.checked ||
            event.target.elements.sense.checked ||
            event.target.elements.fatigue.checked ||
            event.target.elements.bodyaches.checked) {
            alert("Covid Symptoms.Not Eligible for Volunteering. Disable for 14 days")
            // TODO: Disable volunteer and Redirect to Dashboard
        } else {
            alert("Updated")
            // TODO: Redirect to Dashboard
        }
        event.preventDefault();
    }

    render() {
        return (
            <body>
                <div className="background">
                    <h1>Availability and Health Status</h1>
                    <br/>
                </div>

                <div className="background">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                        <div>
                            <h4>Current Health Conditions(tick all that apply)</h4>
                        </div>
                        <div>
                            <input type="checkbox" id="breathe" name="breathe" className="input-checkbox"/>
                            <label htmlFor="breathe">Breathing Issues</label>
                        </div>
                        <div>
                            <input type="checkbox" id="fever" name="fever" className="input-checkbox" />
                            <label htmlFor="fever">Fever</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cold" name="cold" className="input-checkbox" />
                            <label htmlFor="cold">Cold/Cough</label>
                        </div>
                        <div>
                            <input type="checkbox" id="sense" name="sense" className="input-checkbox"/>
                            <label htmlFor="sense">Lost sense of smell/taste</label>
                        </div>
                        <div>
                            <input type="checkbox" id="fatigue" name="fatigue" className="input-checkbox"/>
                            <label htmlFor="fatigue">Fatigue</label>
                        </div>
                        <div>
                            <input type="checkbox" id="bodyaches" name="bodyaches" className="input-checkbox"/>
                            <label htmlFor="bodyaches">Body Aches</label>
                        </div>
                        </fieldset>
                        <br/>
                        <div>
                            <h4>Availability</h4>
                        </div>
                        <br/>
                        <input type="submit" className="btn-primary btn" value="Update"></input>
                    </form>
                </div>
            </body>
        );
    }
}

export default AvailablityHealthStatus;