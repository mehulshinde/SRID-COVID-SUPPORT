import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import Item from './Item';
import { useHistory } from 'react-router-dom';

export default function EditItems() {
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState();
  const [itemList, setItemList] = useState([]);
  const history = useHistory();

  function handleAddItem(e) {
    e.preventDefault();
    console.log(e);
    if (itemName && itemQty)
      setItemList([...itemList, { name: itemName, qty: itemQty }]);
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
        <h1>Subscription Information</h1>
      </div>
      <div class="body">
      </div>
    </>
  );
}
