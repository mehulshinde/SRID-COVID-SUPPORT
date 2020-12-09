import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Item(item) {
  const [itemName, setItemName] = useState(item.item.itemName);
  const [itemQty, setItemQty] = useState(item.item.itemQty);
  const history = useHistory();

  let classVal = "picture";
  if (item.item.itemName.includes("Yogurt")) {
    classVal = classVal + " yogurt";
  } else if (item.item.itemName.includes("Milk")) {
    classVal = classVal + " milk";
  } else if (item.item.itemName.includes("Orange")) {
    classVal = classVal + " orange";
  }
  // console.log(itemList);

  // function routeToEditItem(e) {
  //   console.log("Routing to :", item.itemList);
  //   const newState = { item: item.item, itemList: item.itemList };
  //   history.push({ pathname: "/edit-item-list/item", state: newState });
  // }

  return (
    <>
      <div class="item">
        <div id={item.item.itemName} class={classVal}></div>
        <div class="req-item">
          <div class="item-name">{item.item.itemName}</div>
          <div class="subtext">Qty: {item.item.itemQty}</div>
        </div>
        {/* <h2 class="item-name">{item.item.itemName}</h2>
        <div class="subtext">
          <p class="quantity">{item.item.itemQty}</p> */}
        {/* <div class="action"></div> */}
        {/* </div> */}
      </div>
    </>
  );
}
