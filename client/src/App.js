import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/" component={Books} />
            <Route exact path="/Books" component={Books} />
            <Route exact path="/Books/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
