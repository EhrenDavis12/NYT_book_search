import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import SavedBooks from "./pages/SavedBooks";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={SavedBooks} />
            {/* <Route exact path="/Books" component={Books} />
            <Route exact path="/Books/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
