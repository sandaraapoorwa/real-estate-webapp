import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import './Home.css';

// Featured properties data
const featuredProperties = [
  {
    id: 'prop1',
    title: 'Attractive Family Home',
    price: 750000,
    image: '/Photos/home/home.jpg',
    description:
      'Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station.',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,500 sqft',
    url: '/html/prop1.html', // Ensure proper relative path for HTML files in public directory
    type: 'House',
    dateAdded: '2022-10-12',
    location: 'Petts Wood Road, Petts Wood, Orpington BR5',
  },
  {
    id: 'prop2',
    title: 'Modern Garden Flat',
    price: 399995,
    image: '/Photos/apartment/apartment.png',
    description:
      'Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat.',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,200 sqft',
    url: '/html/prop2.html',
    type: 'Flat',
    dateAdded: '2022-09-14',
    location: 'Crofton Road Orpington BR6',
  },
  {
    id: 'prop3',
    title: 'Luxury Villa',
    price: 1200000,
    image: '/Photos/luxury/luxury.jpg',
    description:
      'Exquisite five-bedroom luxury villa in a prestigious location with high-end amenities.',
    bedrooms: 5,
    bathrooms: 4,
    area: '4,000 sqft',
    url: '/html/prop3.html',
    type: 'House',
    dateAdded: '2022-11-05',
    location: 'Kensington, London SW3',
  },
];

const Home = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSearch = (searchParams) => {
    console.log('Search params:', searchParams);
    // Implement search functionality here
  };

  const handlePropertyClick = (url) => {
    window.location.href = url; // Use direct navigation to static HTML file
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

      {/* Main content */}
      <Container className="my-5">
        <Row>
          <Col md={4} className="mb-4">
            <h2>Find Properties Through Google Maps</h2>
            <p>Explore our wide range of properties to find your perfect home.</p>
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="primary">Open Google Maps</Button>
            </a>
          </Col>
          <Col md={4} className="mb-4">
            <h2>About Us</h2>
            <p>Learn more about our company and our commitment to your success.</p>
            <Button variant="primary" onClick={() => navigate('/about')}>
              About Dream Home Realty
            </Button>
          </Col>
          <Col md={4} className="mb-4">
            <h2>Contact Us</h2>
            <p>Get in touch with our team for personalized assistance.</p>
            <Button variant="primary" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Featured Properties Section */}
      <Container fluid className="my-5">
        <h2 className="text-center mb-4">Featured Properties</h2>
        <Row className="justify-content-center">
          {featuredProperties.map((property) => (
            <Col key={property.id} md={4} className="mb-4">
              <Card className="featured-property-box h-100">
                <Card.Img
                  variant="top"
                  src={property.image}
                  alt={property.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text className="text-primary font-weight-bold">
                    £{property.price.toLocaleString()}
                  </Card.Text>
                  <Card.Text>{property.description}</Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={() => handlePropertyClick(property.url)} // Direct navigation
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
