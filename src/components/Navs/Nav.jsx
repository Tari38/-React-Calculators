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
          <NavDropdown
            id="basic-nav-dropdown"
            title={"Converters"}
            >

            <NavDropdown.Item  className="navlink" href="/converters/Converters" >Converters</NavDropdown.Item >
            <NavDropdown.Item  className="navlink" href="/converters/Weight" >Weight</NavDropdown.Item>


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
              <ul className="menu-navlink">
                  <li><a href="/components/Home" >Home</a></li>
                  <li><a href="/basic-calculator/Calculator" >Calculator</a></li>
                  <li><a href="/bmi-calculator/BmiCalculator" >Bmi Calculator</a></li>
                  <li><a href="/converters/Converters" >Converters</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default NavBar;
