import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => (

  <Navbar expand="lg" className="corNavBar">

    <Navbar.Brand href="#home" className="logo-titulo">Veganese</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navSessoes">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="curiosidades">Curiosidades</Nav.Link>
        <Nav.Link href="ong">ONG</Nav.Link>
        <Nav.Link href="busque-receitas">Busque Receitas</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)

export default NavBar;