import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SearchBar from '../searchbar/SearchBar';;
import './Home.css';

const Home = () => {
  const featuredProperties = [
    { id: 1, title: 'Modern Apartment', price: '$250,000', image: './assets' },
    { id: 2, title: 'Cozy Family Home', price: '$450,000', image: './assets/photos/home.jpg' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000', image: './assets/photos/luxury.jpg' }
  ];

  const handleSearch = (searchParams) => {
    // In a real application, this would typically trigger a search
    // and update the list of properties. For now, we'll just log the params.
    console.log('Search params:', searchParams);
  };

  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4">Find Your Dream Home</h1>
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>
      <h2 className="text-center mb-4">Featured Properties</h2>
      <Row>
        {featuredProperties.map((property) => (
          <Col key={property.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={property.image} alt={property.title} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.price}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;

