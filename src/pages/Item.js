import { useState } from 'react';

export default function Item(props) {
  const [itemName, setItemName] = useState(props.item.itemName);
  const [itemQty, setItemQty] = useState(props.item.itemQty);

  return (
    <>
      <div class="item">
        <div class="picture"></div>
        <div class="description">
          <h2 class="item-name">{props.item.itemName}</h2>
          <div class="subtext">
            <p class="quantity">{props.item.itemQty}</p>
            {/* <div class="action"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
