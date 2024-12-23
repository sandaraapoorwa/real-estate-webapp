import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import propertiesData from '../data/properties.json';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState(propertiesData.properties);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      handleSearch(location.state.searchParams);
    }
  }, [location]);

  const handleSearch = (searchParams) => {
    const filteredProperties = propertiesData.properties.filter(property => {
      const matchesType = searchParams.type === '' || property.type === searchParams.type;
      const matchesPrice = (searchParams.minPrice === '' || property.price >= parseInt(searchParams.minPrice)) &&
                           (searchParams.maxPrice === '' || property.price <= parseInt(searchParams.maxPrice));
      const matchesBedrooms = (searchParams.minBedrooms === '' || property.bedrooms >= parseInt(searchParams.minBedrooms)) &&
                              (searchParams.maxBedrooms === '' || property.bedrooms <= parseInt(searchParams.maxBedrooms));
      const matchesDateAdded = searchParams.dateAdded === '' || new Date(property.dateAdded) >= new Date(searchParams.dateAdded);
      const matchesPostcode = searchParams.postcodeArea === '' || property.postcodeArea.toLowerCase().startsWith(searchParams.postcodeArea.toLowerCase());

      return matchesType && matchesPrice && matchesBedrooms && matchesDateAdded && matchesPostcode;
    });

    setProperties(filteredProperties);
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  return (
    <Container className="my-5 fade-in">
      <h1 className="text-center mb-4">Our Properties</h1>
      
      {selectedProperty && (
        <Row className="my-4 fade-in">
          <Col md={12}>
            <h2 className="mb-3">Selected Property</h2>
            <Card>
              <Row>
                <Col md={6}>
                  <Card.Img src={selectedProperty.image} alt={selectedProperty.title} />
                </Col>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title>{selectedProperty.title}</Card.Title>
                    <Card.Text className="text-primary font-weight-bold">${selectedProperty.price.toLocaleString()}</Card.Text>
                    <ul className="list-unstyled">
                      <li><strong>Type:</strong> {selectedProperty.type}</li>
                      <li><strong>Bedrooms:</strong> {selectedProperty.bedrooms}</li>
                      <li><strong>Date Added:</strong> {selectedProperty.dateAdded}</li>
                      <li><strong>Postcode Area:</strong> {selectedProperty.postcodeArea}</li>
                    </ul>
                    <Button variant="primary">Contact Agent</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}

      <Row className="mt-4">
        {properties.map((property) => (
          <Col md={4} key={property.id} className="mb-4 fade-in">
            <Card className="h-100">
              <Card.Img variant="top" src={property.image} alt={property.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{property.title}</Card.Title>
                <Card.Text className="text-primary font-weight-bold">${property.price.toLocaleString()}</Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    {property.bedrooms} bedrooms | {property.type} | {property.postcodeArea}
                  </small>
                </Card.Text>
                <Button 
                  variant="primary" 
                  className="mt-auto"
                  onClick={() => handlePropertyClick(property)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Properties;
