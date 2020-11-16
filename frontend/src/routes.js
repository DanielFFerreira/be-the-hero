import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import NewIncident from "./pages/newIncident";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile}/>
        <Route path="/incidents/new" component={NewIncident}/>
      </Switch>
    </BrowserRouter>
  );
}
