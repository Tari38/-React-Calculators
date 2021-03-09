import React from "react";
import { NavDropdown, Navbar, Nav} from 'react-bootstrap';

import "./Nav.css";

function NavBar() {

  return (
    <>
      <Navbar expand="md" className="navbar">
        <div className="nav-brand">
          <Navbar.Brand className="nav-brand">
            CALCULATORS
          </Navbar.Brand>
        </div>

        <container className="navlinks-container">
            <Nav.Link  className="navlink" activeClassName="is-active" href="/components/Home" >Home</Nav.Link>

            <Nav.Link  className="navlink" activeClassName="is-active" href="/basic-calculator/Calculator" >Calculator</Nav.Link>

            <Nav.Link  className="navlink" activeClassName="is-active" href="/bmi-calculator/BmiCalculator" >Bmi Calculator</Nav.Link>

        <div className="mb-2">
          <NavDropdown className="navlink" id="basic-nav-dropdown" title={"Converters"}>
          <div id="dropdown-container">
            <NavDropdown.Item  id="dropdown-item" href="/converters/Converters" >View All</NavDropdown.Item >
            <NavDropdown.Item  id="dropdown-item" href="/converters/Weight" >Weight</NavDropdown.Item>
            <NavDropdown.Item  id="dropdown-item" href="/converters/Length" >Length</NavDropdown.Item>
            <NavDropdown.Item  id="dropdown-item" href="/converters/Temperature" >Temperature</NavDropdown.Item>
          </div>

          </NavDropdown>
        </div>
        </container>
      </Navbar>


   <div className="menu-wrap">

    <input type="checkbox" className="toggler"></input>
      <div className="hamburger">
       <div></div>
      </div>
        <div className="menu">
          <div>
            <div>
              <ul activeClassName="is-active">
                  <li className="menu-navlink"><a href="/components/Home" >Home</a></li>
                  <li className="menu-navlink"><a href="/basic-calculator/Calculator" >Calculator</a></li>
                  <li className="menu-navlink"><a href="/bmi-calculator/BmiCalculator" >Bmi Calculator</a></li>
                  <li className="menu-navlink"><a href="/converters/Weight" >Weight Converter</a></li>
                  <li className="menu-navlink"><a href="/converters/Length" >Length Converter</a></li>
                  <li className="menu-navlink"><a href="/converters/Temperature" >Temperature Converter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default NavBar;
