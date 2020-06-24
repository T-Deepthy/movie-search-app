import React, { Component } from "react";
import { Route, Switch } from "react-router";
import MainFrame from "./containers/MainFrame/MainFrame";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" render={() => <MainFrame />} exact/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
