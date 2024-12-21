import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  const featuredProperties = [
    { id: 1, title: 'Modern Apartment', price: '$250,000', image: '/placeholder.svg?height=200&width=300' },
    { id: 2, title: 'Cozy Family Home', price: '$450,000', image: '/placeholder.svg?height=200&width=300' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000', image: '/placeholder.svg?height=200&width=300' },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Welcome to Dream Home</h1>
      <h2 className="mb-4">Top Selling Properties</h2>
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

