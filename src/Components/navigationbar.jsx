import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function PageNavigation() {
  return (
    <Navbar
      collapseOnSelect
      bg="light"
      variant="light"
      sticky="top"
      className="NavBar"
    >
      <Navbar.Brand className="NavbarTitle">House of Numbers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Link className="reset-button" href="/">
          Reset
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default PageNavigation;
