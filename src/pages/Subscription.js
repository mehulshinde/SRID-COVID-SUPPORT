import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export default function Subscription() {
  // const [itemName, setItemName] = useState('');
  // const [itemQty, setItemQty] = useState();
  // const [itemList, setItemList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState();
  const [frequency, setFrequency] = useState('');


  const history = useHistory();

  function handleAddItem(e) {
    e.preventDefault();
    //console.log(startDate + streetAddress + city + state + zipCode + frequency);
    alert('Subscription successful! Your items will be delivered by');
  }

  function Subscription(e) {
    console.log(e);
  }

  return (
    <>
      <div class="library-fontello">
        <i
          class="icon-left-open back"
          onClick={() => {
            history.push('/user-home');
          }}
        ></i>
      </div>
      <div class="title">
        <h1>Subscription</h1>
      </div>
      <div class="body">
        <Form>
          <Form.Group controlId="dob">
            <Form.Label>Next Delivery Date</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              required
            ></Form.Control>
            <Form.Control
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></Form.Control>
            <Form.Control
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            ></Form.Control>
            <Form.Control
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Delivery Frequency</Form.Label>
            <Form.Control as="select"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}>
              <option>Weekly</option>
              <option>Bi-Weekly</option>
              <option>Monthly</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit" onClick={handleAddItem}>
            Next
          </Button>
        </Form>
      </div>
    </>
  );
}
