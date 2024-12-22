import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import SearchBar from '../searchbar/SearchBar';

const Properties = () => {
  const initialProperties = [
    { id: 1, title: 'Modern Apartment', price: 250000, type: 'flat', bedrooms: 2, dateAdded: '2023-05-01', postcodeArea: 'BR1', image: '/placeholder.svg?height=200&width=300' },
    { id: 2, title: 'Cozy Family Home', price: 450000, type: 'house', bedrooms: 4, dateAdded: '2023-05-05', postcodeArea: 'NW1', image: '/placeholder.svg?height=200&width=300' },
    { id: 3, title: 'Luxury Villa', price: 1200000, type: 'house', bedrooms: 5, dateAdded: '2023-05-10', postcodeArea: 'SW3', image: '/placeholder.svg?height=200&width=300' },
    { id: 4, title: 'Urban Loft', price: 350000, type: 'flat', bedrooms: 1, dateAdded: '2023-05-15', postcodeArea: 'E1', image: '/placeholder.svg?height=200&width=300' },
    { id: 5, title: 'Suburban House', price: 550000, type: 'house', bedrooms: 3, dateAdded: '2023-05-20', postcodeArea: 'SE1', image: '/placeholder.svg?height=200&width=300' },
    { id: 6, title: 'Beachfront Condo', price: 750000, type: 'flat', bedrooms: 2, dateAdded: '2023-05-25', postcodeArea: 'BN1', image: '/placeholder.svg?height=200&width=300' },
    { id: 7, title: 'Beachfront Condo', price: 750000, type: 'flat', bedrooms: 2, dateAdded: '2023-05-25', postcodeArea: 'BN1', image: '/placeholder.svg?height=200&width=300' },
    { id: 8, title: 'Beachfront Condo', price: 750000, type: 'flat', bedrooms: 2, dateAdded: '2023-05-25', postcodeArea: 'BN1', image: '/placeholder.svg?height=200&width=300' },
    { id: 9, title: 'Beachfront Condo', price: 750000, type: 'flat', bedrooms: 2, dateAdded: '2023-05-25', postcodeArea: 'BN1', image: '/placeholder.svg?height=200&width=300' },
    { id: 10, title: 'Beachfront Condo', price: 750000, type: 'flat', bedrooms: 2, dateAdded: '2023-05-25', postcodeArea: 'BN1', image: '/placeholder.svg?height=200&width=300' },
    { id: 11, title: 'Beachfront Condo', price: 750000, type: 'flat', bedrooms: 2, dateAdded: '2023-05-25', postcodeArea: 'BN1', image: '/placeholder.svg?height=200&width=300' },
    { id: 12, title: 'Beachfront Condo', price: 750000, type: 'flat', bedrooms: 2, dateAdded: '2023-05-25', postcodeArea: 'BN1', image: '/placeholder.svg?height=200&width=300' },
  ];

  const [properties, setProperties] = useState(initialProperties);

  const handleSearch = (searchParams) => {
    const filteredProperties = initialProperties.filter(property => {
      const matchesType = searchParams.type === 'any' || property.type === searchParams.type;
      const matchesPrice = (!searchParams.minPrice || property.price >= parseInt(searchParams.minPrice)) &&
                           (!searchParams.maxPrice || property.price <= parseInt(searchParams.maxPrice));
      const matchesBedrooms = (!searchParams.minBedrooms || property.bedrooms >= parseInt(searchParams.minBedrooms)) &&
                              (!searchParams.maxBedrooms || property.bedrooms <= parseInt(searchParams.maxBedrooms));
      const matchesDateAdded = (!searchParams.dateAddedAfter || new Date(property.dateAdded) >= new Date(searchParams.dateAddedAfter)) &&
                               (!searchParams.dateAddedBefore || new Date(property.dateAdded) <= new Date(searchParams.dateAddedBefore));
      const matchesPostcode = !searchParams.postcodeArea || property.postcodeArea.toLowerCase().startsWith(searchParams.postcodeArea.toLowerCase());

      return matchesType && matchesPrice && matchesBedrooms && matchesDateAdded && matchesPostcode;
    });

    setProperties(filteredProperties);
  };

  useEffect(() => {
    // Reset properties to initial state when component mounts
    setProperties(initialProperties);
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Properties</h1>
      <SearchBar onSearch={handleSearch} />
      <Row className="mt-4">
        {properties.map((property) => (
          <Col key={property.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={property.image} alt={property.title} />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>
                  <strong>${property.price.toLocaleString()}</strong><br />
                  {property.bedrooms} bedrooms | {property.type}<br />
                  Added: {property.dateAdded}<br />
                  Postcode: {property.postcodeArea}
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {properties.length === 0 && (
        <p className="text-center mt-4">No properties match your search criteria. Please try again with different parameters.</p>
      )}
    </Container>
  );
};

export default Properties;

