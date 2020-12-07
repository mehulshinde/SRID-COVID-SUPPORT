import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Item(item) {
  const [itemName, setItemName] = useState(item.item.itemName);
  const [itemQty, setItemQty] = useState(item.item.itemQty);
  const history = useHistory();
  // console.log(itemList);

  // function routeToEditItem(e) {
  //   console.log("Routing to :", item.itemList);
  //   const newState = { item: item.item, itemList: item.itemList };
  //   history.push({ pathname: "/edit-item-list/item", state: newState });
  // }

  return (
    <>
      <div class="item">
        <div class="picture"></div>
        <div class="description">
          <h2 class="item-name">{item.item.itemName}</h2>
          <div class="subtext">
            <p class="quantity">{item.item.itemQty}</p>
            {/* <div class="action"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
