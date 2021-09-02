import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { isAuth } from './actions/authActions';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuth())
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Content />
          </Route>
          <Route path="/kirjaudu-sisaan">
            <Login />
          </Route>
          <Route path="/rekisteroidy">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
