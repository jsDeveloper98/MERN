import React from "react";
import "./App.css";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const routes = useRoutes(false);
  return <Router>{routes}</Router>;
};

export default App;
