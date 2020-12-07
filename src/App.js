


import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { Container } from 'react-bootstrap';
import ItemList from './pages/ItemList.js';
import VolunteerSignup from "./pages/VolunteerSignup";
import Login from "./pages/login";
import Signup from "./pages/signup";
import AvailablityHealthStatus from "./pages/Availablity-HealthStatus";
import ViewRequests from "./pages/viewRequests";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import EditItems from './pages/EditItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Subscription from "./pages/Subscription";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Container
      style={{
        maxWidth: '576px',
        height: '100vh',
        margin: 'auto',
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" render={() => null}></Route>
          <Route exact path="/item-list" render={() => <ItemList />}></Route>
          <Route exact path="/volunteer-signup" render={() => <VolunteerSignup />}></Route>
          <Route exact path="/edit-volunteer-data" render={() => <AvailablityHealthStatus />}></Route>
          <Route exact path="/login" render={() => <Login />}></Route>
          <Route exact path="/signup" render={() => <Signup />}></Route>
          <Route exact path="/viewRequests" render={() => <ViewRequests />}></Route>
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
