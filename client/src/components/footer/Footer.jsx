import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-light py-4 footer">
      <Container>
        <Row className="justify-content-between">
          {/* First Column */}
          <Col md={3} className="mb-3 mb-md-0">
            <h5 className="mb-3">Dream Home Realty</h5>
            <p className="small text-muted">Discover your dream home with us.</p>
          </Col>

          {/* Second Column: Popular Searches */}
          <Col md={3} className="mb-3 mb-md-0">
            <h6 className="mb-3">Popular Searches</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-muted">Pet Friendly Apartments</Link></li>
              <li><Link to="/" className="text-muted">Open Houses</Link></li>
              <li><Link to="/" className="text-muted">Land for Sale</Link></li>
              <li><Link to="/" className="text-muted">Townhomes for Rent</Link></li>
            </ul>
          </Col>

          {/* Third Column: Popular Rental Searches */}
          <Col md={3} className="mb-3 mb-md-0">
            <h6 className="mb-3">Popular Rental Searches</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-muted">San Antonio Apartments</Link></li>
              <li><Link to="/" className="text-muted">New York Apartments</Link></li>
              <li><Link to="/" className="text-muted">Houston Apartments</Link></li>
              <li><Link to="/" className="text-muted">Seattle Apartments</Link></li>
            </ul>
          </Col>

          {/* Fourth Column: Social Links & Legal */}
          <Col md={3}>
            <h6 className="mb-3">Follow Us</h6>
            <div className="social-icons mb-3">
              <a href="#" className="me-2 text-muted"><i className="bi bi-facebook"></i></a>
              <a href="#" className="me-2 text-muted"><i className="bi bi-instagram"></i></a>
              <a href="#" className="me-2 text-muted"><i className="bi bi-twitter"></i></a>
            </div>
            <p className="small text-muted mb-1">© 2024 Dream Home Realty. All rights reserved.</p>
            <p className="small text-muted">Equal Housing Opportunity.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

