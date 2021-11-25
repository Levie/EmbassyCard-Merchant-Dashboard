
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import AdminLayout2 from "layouts/Admin2.js";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/dashboard/switchboard" render={(props) => <AuthLayout {...props} />} />
      <Route path="/dashboard/customer" render={(props) => <AdminLayout {...props} />} />
      <Route path="/dashboard/merchant" render={(props) => <AdminLayout2 {...props} />} />
      <Redirect to="/dashboard/switchboard/mode" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
