import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import ItemList from "./pages/ItemList.js";
import EditItems from "./pages/EditItems";
import Subscription from "./pages/Subscription";
import Home from "./pages/Home";


import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

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
          <Route exact path="/" render={() => null}></Route>
          <Route exact path="/item-list" render={() => <ItemList />}></Route>
          <Route exact path="/edit-item-list" render={() => <EditItems />}></Route>
          <Route exact path="/subscribe" render={() => <Subscription />}></Route>
          <Route exact path="/user-home" render={() => <Home />}></Route>


        </Switch>
      </Router>
    </Container>
  );
}

export default App;
