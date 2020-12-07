import '../styles/App.css';
import '../styles/VolunteerSignup.css';
import React from 'react';
import {useHistory} from "react-router-dom";

export default function VolunteerSignup(){
    const history = useHistory();

    function handleSubmit(event) {
        if ((event.target.elements.age.value > 35) ||
            (event.target.elements.bp.checked ||
            event.target.elements.heart.checked ||
            event.target.elements.diabetes.checked ||
            event.target.elements.kidney.checked ||
            event.target.elements.copd.checked ||
            event.target.elements.asthma.checked)) {
            alert("Not Eligible")
            history.push('/');
        } else {
            alert("Eligible")
            history.push('/volunteer-dashboard');
        }
        event.preventDefault();
    }

        return (
            <>
                <div className="library-fontello">
                    <i
                        className="icon-left-open back"
                        onClick={() => {
                            history.push('/');
                        }}
                    ></i>
                </div>
                <div className="title">
                    <h2>Volunteer Sign Up</h2>
                </div>
                <div className="body">
                    <form onSubmit={handleSubmit}>
                        <div>
                            First Name: <input type="text" name="firstname" className="input"/>
                        </div>
                        <div>
                        Last Name: <input type="text" name="lastname" className="input"/>
                        </div>
                        <div>
                            Age: <input type="number" name="age" maxlength="3" min="0" className="input-age"/>
                            Sex:
                            <select>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <br/>
                        <div>
                            <h3>Medical Conditions</h3>
                            <h3>(tick all that apply)</h3>
                        </div>
                        <br/>
                        <fieldset>
                        <div>
                            <input type="checkbox" id="bp" name="bp" className="input-checkbox"/>
                            <label htmlFor="bp">High Blood Pressure</label>
                        </div>
                        <div>
                            <input type="checkbox" id="heart" name="heart" className="input-checkbox" />
                            <label htmlFor="heart">Heart Conditions</label>
                        </div>
                        <div>
                            <input type="checkbox" id="diabetes" name="diabetes" className="input-checkbox" />
                            <label htmlFor="diabetes">Diabetes</label>
                        </div>
                        <div>
                            <input type="checkbox" id="kidney" name="kidney" className="input-checkbox" />
                            <label htmlFor="kidney">Chronic Kidney Disease</label>
                        </div>
                        <div>
                            <input type="checkbox" id="copd" name="copd" className="input-checkbox"/>
                            <label htmlFor="copd">COPD</label>
                        </div>
                        <div>
                            <input type="checkbox" id="asthma" name="asthma" className="input-checkbox" />
                            <label htmlFor="asthma">Asthma</label>
                        </div>
                        </fieldset>
                        <br/>
                        <div>
                            <div>
                                Username: <input type="text" name="username" className="input"/>
                            </div>
                            <div>
                                Phone number: <input type="tel" name="phonenumber" className="input" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="650-390-7919"/>
                            </div>
                        </div>
                        <br/>
                        <div align="center">
                            <input type="submit" className="btn-primary btn" value="Sign Up" id="submit"></input>
                        </div>
                    </form>
                </div>
            </>
        );
}
