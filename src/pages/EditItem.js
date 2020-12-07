import { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Item from "./Item";
import { useHistory } from "react-router-dom";

const EditItem = () => {
  const history = useHistory();
  const [itemName, setItemName] = useState(
    history.location.state.item.itemName
  );
  const [itemQty, setItemQty] = useState(history.location.state.item.itemQty);
  const originalName = history.location.state.name;
  const originalQty = history.location.state.qty;
  const [itemList, setItemList] = useState([]);
  console.log(history.location.state);

  //   function handleAddItem(e) {
  //     e.preventDefault();
  //     console.log(e);
  //     if (itemName && itemQty)
  //       setItemList([...itemList, { name: itemName, qty: itemQty }]);
  //   }

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
      // history.push({
      //   pathname: "/edit-item-list",
      //   state: { itemList: newItems },
      // });
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
