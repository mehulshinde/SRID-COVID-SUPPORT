import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function ItemList() {
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState();
  const [itemList, setItemList] = useState([]);

  function handleAddItem(e) {
    e.preventDefault();
    console.log(e.target);
    setItemList([...itemList, { name: itemName, qty: itemQty }]);
  }
  return (
    <>
      <h3>Item List</h3>
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
      {itemList.map((item) => (
        <>
          <div>{item.name}</div>
          <div>{item.qty}</div>
        </>
      ))}
    </>
  );
}
