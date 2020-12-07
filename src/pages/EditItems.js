import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Item from "./Item";
import { useHistory } from "react-router-dom";

export default function EditItems() {
  const history = useHistory();

  const [itemList, setItemList] = useState([]);

  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState();

  // if (history.location.state.itemList) {
  //   setItemList(history.location.state.itemList);
  // }

  function handleAddItem(e) {
    console.log(itemList);
    e.preventDefault();
    console.log(e);
    if (itemName && itemQty) setItemList([...itemList, { itemName, itemQty }]);
  }

  // function routeToEditItem(item) {
  //   console.log("Routing to :", item.itemList);
  //   history.push({ pathname: "/edit-item-list/item", state: newState });
  // }

  return (
    <>
      <div class="library-fontello">
        <i
          class="icon-left-open back"
          onClick={() => {
            history.push("/item-list");
          }}
        ></i>
      </div>
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
          <div
            onClick={() => {
              history.push({
                pathname: "/edit-item-list/item",
                state: { item, itemList },
              });
            }}
          >
            <Item item={item}></Item>
          </div>
        ))}
      </div>
    </>
  );
}
