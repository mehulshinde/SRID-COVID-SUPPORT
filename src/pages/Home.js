import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';



export default function Home() {
  function onDemand(e) {
    e.preventDefault();
    console.log('The link was clicked.');

  }
  function subscribe(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    window.location.href = "/subscribe";
  }

  return (
    <>
    <button onClick={onDemand}>
      Create New On-Demand Request
    </button>
    <button onClick={subscribe}>
      Subscribe
    </button>
    //dashboard with upcoming on -demand requests + subscriptions
    </>
  );
}
