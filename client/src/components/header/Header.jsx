import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Photos/logo.png';
import SignupPopup from '../signup/SignupPopup'; // Import the SignupPopup component

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        {/* Logo and Brand Name */}
        <Navbar.Brand as={Link} to="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="me-2" 
            style={{ width: '40px', height: 'auto' }} 
          />
          <span className="fw-bold">Dream Home Realty</span>
        </Navbar.Brand>

        {/* Responsive Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/properties" className="mx-2">Properties</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>

            {/* Sign Up or Log In Button - using SignupPopup */}
            <Nav.Link className="mx-2">
              <SignupPopup />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
