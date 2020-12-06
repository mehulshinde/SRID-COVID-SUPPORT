import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Item from "./Item";

export default function EditItems() {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState();
  const [itemList, setItemList] = useState([]);

  function handleAddItem(e) {
    e.preventDefault();
    console.log(e);
    if (itemName && itemQty)
      setItemList([...itemList, { name: itemName, qty: itemQty }]);
  }

  function routeToEditItem(e) {
    console.log(e);
  }

  return (
    <>
      <div class="back"></div>
      <div class="title">
        <h1>Edit Items</h1>
      </div>
      <div class="body">
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
          <Item item={item} onClick={routeToEditItem}></Item>
        ))}
      </div>
    </>
  );
}
