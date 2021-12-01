
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";


import AdminLayout2 from "layouts/Admin2.js";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/dashboard/merchant" render={(props) => <AdminLayout2 {...props} />} />
      <Redirect to="/dashboard/merchant/overview_merchant" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
