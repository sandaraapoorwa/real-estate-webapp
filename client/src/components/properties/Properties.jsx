import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Properties = () => {
  const properties = [
    { id: 1, title: 'Modern Apartment', price: '$250,000', beds: 2, baths: 2, sqft: 1000, image: '/placeholder.svg?height=200&width=300' },
    { id: 2, title: 'Cozy Family Home', price: '$450,000', beds: 4, baths: 3, sqft: 2500, image: '/placeholder.svg?height=200&width=300' },
    { id: 3, title: 'Luxury Villa', price: '$1,200,000', beds: 5, baths: 4, sqft: 4000, image: '/placeholder.svg?height=200&width=300' },
    { id: 4, title: 'Downtown Loft', price: '$350,000', beds: 1, baths: 1, sqft: 800, image: '/placeholder.svg?height=200&width=300' },
    { id: 5, title: 'Suburban Townhouse', price: '$550,000', beds: 3, baths: 2, sqft: 1800, image: '/placeholder.svg?height=200&width=300' },
    { id: 6, title: 'Beachfront Condo', price: '$750,000', beds: 2, baths: 2, sqft: 1200, image: '/placeholder.svg?height=200&width=300' },
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-4">Available Properties</h2>
      <Row>
        {properties.map((property) => (
          <Col key={property.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={property.image} alt={property.title} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>
                  <strong>{property.price}</strong><br />
                  {property.beds} beds | {property.baths} baths | {property.sqft} sqft
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Properties;

