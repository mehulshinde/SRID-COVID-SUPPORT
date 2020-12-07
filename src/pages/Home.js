import { useState } from 'react';
import { Form, Col, Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



export default function Home() {
  const history = useHistory();

  function onDemand(e) {
    e.preventDefault();
    // console.log('The link was clicked.');
    window.location.href = "/item-list";

  }
  function subscribe(e) {
    e.preventDefault();
    //console.log('The link was clicked.');
    window.location.href = "/subscription-item-list";
  }

  return (
    <>
    <div className="back">
        <div className="library-fontello">
            <i className="icon-torso"></i>
        </div>
        <a onClick={() => {
            history.push('/');
            //    TODO: Add path to home page(default I assume)
        }}>Logout</a>
    </div>
      <div class="title">
        <h1>Home</h1>
      </div>
      <div class="body">
        <button onClick={onDemand}>
          Create New On-Demand Request
        </button>
        <button onClick={subscribe}>
          Subscribe
        </button>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Volunteer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/10/20</td>
              <td>Subscription</td>
              <td>Caleb</td>
            </tr>
            <tr>
              <td>12/12/20</td>
              <td>On-Demand</td>
              <td>John</td>
            </tr>
            <tr>
              <td>12/17/20</td>
              <td>Subscription</td>
              <td>Caleb</td>
            </tr>
          </tbody>
        </Table>
    </div>
  </>
  );
}
