import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between">
          {/* First Column */}
          <Col md={3} className="footer-column">
            <h5 className="footer-title">Dream Home Realty</h5>
            <p className="footer-description">Discover your dream home with us. We're committed to finding the perfect property for you.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </Col>

          {/* Second Column: Popular Searches */}
          <Col md={3} className="footer-column">
            <h6 className="footer-subtitle">Popular Searches</h6>
            <ul className="footer-links">
              <li><Link to="/">Pet Friendly Apartments</Link></li>
              <li><Link to="/">Open Houses</Link></li>
              <li><Link to="/">Land for Sale</Link></li>
              <li><Link to="/">Townhomes for Rent</Link></li>
            </ul>
          </Col>

          {/* Third Column: Popular Rental Searches */}
          <Col md={3} className="footer-column">
            <h6 className="footer-subtitle">Popular Rental Searches</h6>
            <ul className="footer-links">
              <li><Link to="/">San Antonio Apartments</Link></li>
              <li><Link to="/">New York Apartments</Link></li>
              <li><Link to="/">Houston Apartments</Link></li>
              <li><Link to="/">Seattle Apartments</Link></li>
            </ul>
          </Col>

          {/* Fourth Column: Contact & Legal */}
          <Col md={3} className="footer-column">
            <h6 className="footer-subtitle">Contact Us</h6>
            <p className="footer-contact">1234 Dream Street, Suite 5678<br />Dreamville, DH 90210</p>
            <p className="footer-contact">Phone: (555) 123-4567<br />Email: info@dreamhomerealty.com</p>
            <p className="footer-legal">© 2024 Dream Home Realty. All rights reserved.</p>
            <p className="footer-legal">Equal Housing Opportunity.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

