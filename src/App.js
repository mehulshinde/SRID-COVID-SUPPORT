import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import ItemList from './pages/ItemList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

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
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
