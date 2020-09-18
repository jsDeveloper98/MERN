import React, { useContext } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export const NavbarComponent = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/create">
            Create
          </Nav.Link>
          <Nav.Link as={Link} to="/links">
            Links
          </Nav.Link>
          <Nav.Link as={Link} to="/" onClick={handleLogout}>
            Logout
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};
