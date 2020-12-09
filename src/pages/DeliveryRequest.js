import Item from './Item';
import { useHistory } from 'react-router-dom';
import { requestFor } from './ViewRequests';
export default function DeliveryRequest() {
  const history = useHistory();
  const itemList = [
    { itemName: 'Organic Milk', itemQty: 1 },
    { itemName: 'Yogurt', itemQty: 1 },
  ];

  const sentMsg = [
    requestFor +
      ',I am about to get you your groceries for this week, you specified you need: Organic Milk - 1 gallon Yoghurt - 1 Do you want anything changed?',
  ];

  const chat = { title: "Mary's Request", sent: sentMsg, received: [] };
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="library-fontello">
        <i
          className="icon-left-open back"
          onClick={() => {
            history.push('/view-volunteer-requests');
          }}
        ></i>
      </div>
      <div className="title">
        <h1> {requestFor}'s Request</h1>
      </div>
      {/* <p style={{ textAlign: 'center' }}>10 Dec 2020 6 PM</p> */}
      <div className="body">
        {itemList.map((item) => (
          <div>
            <Item item={item}></Item>
          </div>
        ))}
        {/* <div class="table">
          <div>
            <h2>Items List</h2>

            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
              </tr>

              <tr>
                <td>Organic Yoghurt</td>
                <td>1 Lbs</td>
              </tr>
            </table>
          </div> */}
        {/* </div> */}

        <div class="proceed-button" align="center">
          {/* <input
            type="submit"
            className="btn-primary btn"
            value="Process Delivery"
            id="submit"
          ></input> */}
          <button
            onClick={() => {
              history.push({ pathname: '/chat', state: chat });
            }}
          >
            Process Delivery
          </button>
        </div>
      </div>
    </>
  );
}
