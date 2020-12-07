import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { Container } from "react-bootstrap";
import ItemList from "./pages/ItemList.js";
import ItemListSub from "./pages/ItemListSub.js";

import VolunteerSignup from "./pages/VolunteerSignup";
import AvailabilityHealthStatus from "./pages/Availablity-HealthStatus";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import EditItems from "./pages/EditItems";


import Login from "./pages/login";
import Signup from "./pages/signup";

import ViewRequests from "./pages/viewRequests";
import ViewRequests2 from "./pages/viewRequests2";
import DeliveryRequest2 from "./pages/DeliveryRequest2";
import DeliveryRequest from "./pages/DeliveryRequest"

import Subscription from "./pages/Subscription";
import Home from "./pages/Home";
import NewRequestForm from "./pages/NewRequestForm";
import VolunteerSelection from "./pages/VolunteerSelection";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Container
      style={{
        maxWidth: "576px",
        height: "100vh",
        margin: "auto",
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" render={() => <div>HOME</div>}></Route>
          <Route exact path="/item-list" render={() => <ItemList />}></Route>
          <Route
            exact
            path="/subscription-item-list"
            render={() => <ItemListSub />}
          ></Route>
          <Route
            exact
            path="/subscribe"
            render={() => <Subscription />}
          ></Route>
          <Route exact path="/user-home" render={() => <Home />}></Route>
          <Route
            exact
            path="/new-request/form"
            render={() => <NewRequestForm />}
          ></Route>
          <Route
            exact
            path="/new-request/volunteer-selection"
            render={() => <VolunteerSelection />}
          ></Route>
          <Route exact path="/deliveryRequest" render={() => <DeliveryRequest />}></Route>
          <Route exact path="/subscribe" render={() => <Subscription />}></Route>
          <Route exact path="/user-home" render={() => <Home />}></Route>
          <Route exact path="/login" render={() => <Login />}></Route>
          <Route exact path="/signup" render={() => <Signup />}></Route>
          <Route exact path="/viewRequests" render={() => <ViewRequests />}></Route>
          <Route exact path="/viewRequests2" render={() => <ViewRequests2 />}></Route>
          <Route exact path="/deliveryRequest2" render={() => <DeliveryRequest2 />}></Route>

          <Route
            exact
            path="/volunteer-signup"
            render={() => <VolunteerSignup />}
          ></Route>
          <Route
            exact
            path="/edit-volunteer-data"
            render={() => <AvailabilityHealthStatus />}
          ></Route>
          <Route
            exact
            path="/volunteer-dashboard"
            render={() => <VolunteerDashboard />}
          ></Route>
          <Route
            exact
            path="/edit-item-list"
            render={() => <EditItems />}
          ></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
