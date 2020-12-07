import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ItemList(props) {
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
      <div class="library-fontello">
        <i
          class="icon-left-open back"
          onClick={() => {
            props.history.push('/user-home');
          }}
        ></i>
      </div>
      <div class="title">
        <h1>Item List</h1>
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
        <Link to={{ pathname: '/new-request/form', state: { itemList } }}>
          <Button>Continue</Button>
        </Link>
      </div>
    </>
  );
}
