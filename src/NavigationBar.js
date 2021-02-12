import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburgerMenu } from "react-icons/gi";
import './NavigationBar.css';

function NavigationBar() {

    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <GiHamburgerMenu/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="inactive" href="#home">All</Nav.Link>
      <Nav.Link className="inactive" href="#features">Mobiles</Nav.Link>
      <Nav.Link className="inactive" href="#pricing">Amazon Pay</Nav.Link>
      <Nav.Link className="inactive" href="#pricing">Elizabeth's Amazon.in</Nav.Link>
      <Nav.Link className="inactive" href="#pricing">Best Sellers</Nav.Link>
      <Nav.Link className="inactive" href="#pricing">Today's Deals</Nav.Link>
      <Nav.Link className="inactive" href="#pricing">Customer Service</Nav.Link>
      <Nav.Link className="inactive" href="#pricing">Buy Again</Nav.Link>
      <Nav.Link className="inactive" href="#pricing">Pantry</Nav.Link>

    </Nav>
  </Navbar>
        </div>
    )
}

export default NavigationBar
