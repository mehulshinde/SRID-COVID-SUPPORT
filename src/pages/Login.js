import "../styles/App.css";
import "../styles/VolunteerSignup.css";
import React from "react";
import {useHistory} from "react-router-dom";

export default function Login() {
  const history = useHistory();

  function handleSubmit(event) {
    if(event.target.elements.username.value === "Mary" &&
        event.target.elements.usertyp.value === "User"){
      alert("Login Successful: Welcome Mary!")
      history.push("/user-home");
    } else if (event.target.elements.username.value === "Caleb" &&
        event.target.elements.usertyp.value === "Volunteer") {
      alert("Login Successful: Welcome Caleb!")
      history.push("/volunteer-dashboard");
    } else{
      window.location.reload(true);
    }
    event.preventDefault();
  }

  return (
    <>
      <div className="title">
        <h1>BenevoleBuddy</h1>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit}>
          <br />
          <h2>Login Credentials</h2>
          <br />
          <div>
            <div>
              Username: <input type="text" name="username" className="input" required minLength="4"/>
            </div>
            <div>
              Password:{" "}
              <input
                type="password"
                name="password"
                className="input-password"
                placeholder=" "
                required minLength="4"
              />
            </div>
            <br/>
            <input type="radio" id="vol" name="usertyp" value="Volunteer" className="input-radio"/>
            <label htmlFor="vol"> Login as Volunteer</label><br/>
            <input type="radio" id="user" name="usertyp" value="User" className="input-radio"/>
            <label htmlFor="user"> Login as User</label><br/>
          </div>
          <br />
          <div align="center">
            <input
              type="submit"
              className="btn-primary btn"
              value="Login"
              id="submit"
            ></input>
          </div>
        </form>
        <br/>
          <div align="center">
            <a className="a-class" onClick={() => {
              history.push("/signup");
            }}
            >New User? Signup</a>
          </div>
      </div>
    </>
  );
}
