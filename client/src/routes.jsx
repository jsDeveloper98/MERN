import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/auth";
import Create from "./components/create";
import Detail from "./components/detail";
import Links from "./components/links";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <Links />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
