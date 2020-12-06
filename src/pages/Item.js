export default function Item(item) {
  return (
    <div class="item" onClick="{routeToEditItem}">
      <div class="picture"></div>
      <div class="description">
        <h2 class="item-name">{item.item.name}</h2>
        <div class="subtext">
          <p class="quantity">{item.item.qty}</p>
          <div class="action"></div>
        </div>
      </div>
    </div>
  );
}
