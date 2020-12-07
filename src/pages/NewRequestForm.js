import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export default function NewRequestForm() {
  const history = useHistory();

  return (
    <>
      <Row>
        <Link to="'/new-request/item-list'">
          <span>Back</span>
        </Link>
        <h2>New Request</h2>
      </Row>

      <Form>
        <Form.Group>
          <Form.Label>Essential Types</Form.Label>
          <div>
            <Form.Check inline label="Medicines" type="checkbox" />
            <Form.Check inline label="Groceries" type="checkbox" />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Store Preference</Form.Label>
          <Form.Check
            label="Walmart"
            type="radio"
            name="store-pref"
            id="store-pref-1"
          />
          <Form.Check
            label="Costco"
            type="radio"
            name="store-pref"
            id="store-pref-2"
          />
          <Form.Check
            label="Whole Foods Market"
            type="radio"
            name="store-pref"
            id="store-pref-3"
          />
          <Form.Check
            label="Safeway"
            type="radio"
            name="store-pref"
            id="store-pref-4"
          />
          <Form.Check
            label="No preference"
            type="radio"
            name="store-pref"
            id="store-pref-walmart"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Delivery Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Delivery Time</Form.Label>
          <Form.Control type="time" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Street" type="text" />
          <Form.Row className="mt-1">
            <Col xs="5">
              <Form.Control placeholder="City" type="text" />
            </Col>
            <Col xs="4">
              <Form.Control placeholder="State" type="text" />
            </Col>
            <Col xs="3">
              <Form.Control placeholder="Zip" type="text" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Link to="/new-request/volunteer-selection">
          <Button type="submit">Find Volunteer</Button>
        </Link>
      </Form>
    </>
  );
}
