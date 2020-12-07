import { useState, useEffect } from "react";
import { Form, Col, Button, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();
  const from = new URLSearchParams(window.location.search).get("from");

  useEffect(() => {
    if (from === "test") {
      setTimeout(() => {
        alert("Volunteers have been matched for your pending request");
        history.push("/new-request/volunteer-selection");
      }, 3000);
    }
  }, []);

  function onDemand(e) {
    e.preventDefault();
    // console.log('The link was clicked.');
    history.push("/item-list");
  }
  function subscribe(e) {
    e.preventDefault();
    //console.log('The link was clicked.');
    history.push("/subscription-item-list");
  }

  return (
    <>
      <div className="back">
        <div className="library-fontello">
          <i className="icon-torso"></i>
        </div>
        <a
          onClick={() => {
            history.push("/");
            //    TODO: Add path to home page(default I assume)
          }}
        >
          Logout
        </a>
      </div>
      <div class="title">
        <h1>Home</h1>
      </div>
      <div class="body">
        <button onClick={onDemand}>Create New On-Demand Request</button>
        <button onClick={subscribe}>Subscribe</button>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Items</th>
              <th>Volunteer</th>
            </tr>
          </thead>
          <tbody>
            {props.requests.map((request) => (
              <tr>
                <td>{request.date}</td>
                <td>{request.type}</td>

                <td>{request.itemList.map((item) => item.name).join(", ")}</td>
                <td>{request.volunteer}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
