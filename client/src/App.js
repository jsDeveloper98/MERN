import React from "react";
import "./App.css";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./hooks/auth-hook";
import { AuthContext } from "./context/auth-context";
import { NavbarComponent } from "./components/nav-bar";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
        isAuthenticated,
      }}
    >
      <Router>
        {isAuthenticated && <NavbarComponent />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
