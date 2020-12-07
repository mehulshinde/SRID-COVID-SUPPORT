import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ItemList() {
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState();
  const [itemList, setItemList] = useState([]);

  function handleAddItem(e) {
    e.preventDefault();
    console.log(e.target);
    setItemList([...itemList, { name: itemName, qty: itemQty }]);
    setItemName('');
    setItemQty('');
  }
  return (
    <>
      <h2 className="mt-4">Item List</h2>
      <Form>
        <Form.Row>
          <Col xs="7">
            <Form.Control
              type="text"
              placeholder="Item Name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            ></Form.Control>
          </Col>
          <Col xs="3">
            <Form.Control
              type="text"
              placeholder="Qty"
              value={itemQty}
              onChange={(e) => setItemQty(e.target.value)}
              required
            ></Form.Control>
          </Col>
          <Col xs="2">
            <Button type="submit" onClick={handleAddItem}>
              Add
            </Button>
          </Col>
        </Form.Row>
      </Form>
      {itemList.length === 0 ? (
        <div>Add items to your list</div>
      ) : (
        itemList.map((item) => (
          <Row className="justify-content-around">
            <span>{item.name}</span>
            <span>{item.qty}</span>
            <span>Remove</span>
          </Row>
        ))
      )}
      <Row className="justify-content-between align-content-center">
        <Col>
          <Link to="/user-home">
            <Button variant="secondary">Cancel</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/new-request/form">
            <Button>Continue</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
