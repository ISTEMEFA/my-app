import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

function BasicExample() {
  const [title, setTitle] = useState("Menú");
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Dropdown>
      <DropdownButton
        title={title}
        onClick={() => setTitle("Menú")}>
        <Dropdown.Item href="#">Opción 1</Dropdown.Item>
        <Dropdown.Item href="#">Opción 2</Dropdown.Item>
        <Dropdown.Item href="#">Opción 3</Dropdown.Item>
      </DropdownButton>
    </Dropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;