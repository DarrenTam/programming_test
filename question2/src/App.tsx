import React from "react";
import "./App.css";
import HomePage from "./view/HomePage";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MapPage from "./view/MapPage";
import NotFoundPage from "./view/NotFoundPage";
import ErrorPage from "./view/ErrorPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={HomePage}></Route>
            <Route path="/map"  component={MapPage}></Route>
            <Route path="/error"  component={ErrorPage}></Route>
            <Route path="*"  component={NotFoundPage}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
