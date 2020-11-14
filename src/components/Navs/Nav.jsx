import React from "react";
import { DropdownButton, Navbar, Nav } from 'react-bootstrap';

import "./Nav.css";

function NavBar() {

  return (

      <Navbar className="navbar">
        <Navbar.Brand className="nav-brand" href="/">Calculators</Navbar.Brand>
        <DropdownButton id="dropdown-item-button" title="Apps"></DropdownButton>
            <Nav.Link className="navlink" href="/components/Home" >Home</Nav.Link>
            <Nav.Link className="navlink" href="/basic-calculator/Calculator" >Calculator</Nav.Link>

      </Navbar>

  )
}

export default NavBar;
