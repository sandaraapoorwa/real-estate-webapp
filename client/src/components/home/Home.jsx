import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import './Home.css';

const Home = () => {
  const handleSearch = (searchParams) => {
    console.log('Search params:', searchParams);
    // Implement search functionality here
  };

  return (
    <div className="home-container">
      <div className="hero-section bg-primary text-white py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h1 className="text-center mb-4">Find Your Dream Home</h1>
              <SearchBar onSearch={handleSearch} />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <Row>
          <Col md={4} className="mb-4">
            <h2>Find Properties</h2>
            <p>Explore our wide range of properties to find your perfect home.</p>
            <Link to="/properties">
              <Button variant="primary">View Properties</Button>
            </Link>
          </Col>
          <Col md={4} className="mb-4">
            <h2>About Us</h2>
            <p>Learn more about our company and our commitment to your success.</p>
            <Link to="/about">
              <Button variant="primary">About Dream Home Realty</Button>
            </Link>
          </Col>
          <Col md={4} className="mb-4">
            <h2>Contact Us</h2>
            <p>Get in touch with our team for personalized assistance.</p>
            <Link to="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
