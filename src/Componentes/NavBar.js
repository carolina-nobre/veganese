import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './img-logo/logo.png';
import './NavBar.css'

const NavBar = () => (
    
    <Navbar className="navBar" expand="lg">
       
  <Navbar.Brand href="#home" className="logo-titulo">Veganese</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Curiosidades</Nav.Link>
      <Nav.Link href="#link">ONG</Nav.Link>
      <Nav.Link href="#link">Busque Receitas</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

)

export default NavBar;