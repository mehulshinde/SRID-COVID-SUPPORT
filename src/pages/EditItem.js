import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Item from "./Item";
import { useHistory } from "react-router-dom";
// import defItemList from "./EditItems";

export let updatedItems = [];
const EditItem = () => {
  const history = useHistory();
  const [itemName, setItemName] = useState(
    history.location.state.item.itemName
  );
  console.log(history.location.state);
  const [itemQty, setItemQty] = useState(history.location.state.item.itemQty);
  const originalName = history.location.state.item.itemName;
  const originalQty = history.location.state.item.itemQty;
  const [itemList, setItemList] = useState(history.location.state.itemList);
  console.log(history.location.state);

  function handleSaveItem(e) {
    if (itemName && itemQty) {
      //  Remove the original item
      const newItems = [];
      history.location.state.itemList.forEach((i) => {
        if (i.itemName != originalName) {
          newItems.push(i);
        } else {
          newItems.push({ itemName, itemQty });
        }
      });
      console.log(newItems);
      updatedItems = newItems;
      history.push({
        pathname: "/edit-item-list",
        state: { itemList: newItems },
      });
    }
  }

  function handleCancel(e) {}

  function handleDeleteItem(e) {}

  function routeToEditItem(e) {
    console.log(e);
  }
  return (
    <>
      <div class="library-fontello">
        <i
          class="icon-left-open back"
          onClick={() => {
            //   history.push("/item-list");
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
            <Col xs="2"></Col>
          </Form.Row>
          <Form.Row>
            <div class="edit-item-button">
              <Button onClick={handleSaveItem}>Save</Button>
            </div>
            <div class="edit-item-button">
              <Button onClick={handleDeleteItem}>Delete</Button>
            </div>
            <div class="edit-item-button">
              <Button onClick={handleCancel}>Cancel</Button>
            </div>
          </Form.Row>
        </Form>
      </div>
    </>
  );
};
export default EditItem;
