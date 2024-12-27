import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import propertiesData from '../data/properties.json';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState(propertiesData.properties);
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { type, minPrice, maxPrice, minBedrooms, maxBedrooms, dateAdded, postcodeArea } = location.state.searchParams;

      const filteredProperties = propertiesData.properties.filter((property) => {
        const matchesType = type === 'any' || property.type.toLowerCase() === type.toLowerCase();
        const matchesPrice = (!minPrice || property.price >= minPrice) && (!maxPrice || property.price <= maxPrice);
        const matchesBedrooms = (!minBedrooms || property.bedrooms >= minBedrooms) && (!maxBedrooms || property.bedrooms <= maxBedrooms);
        const matchesDate = !dateAdded || new Date(property.added.year, new Date(`${property.added.month} 1`).getMonth(), property.added.day) >= new Date(dateAdded);
        const matchesPostcode = !postcodeArea || property.location.toLowerCase().includes(postcodeArea.toLowerCase());

        return matchesType && matchesPrice && matchesBedrooms && matchesDate && matchesPostcode;
      });

      setProperties(filteredProperties);
    }
  }, [location.state]);

  const handleFavoriteToggle = (propertyId) => {
    setFavorites((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  return (
    <Container>
      <Row>
        {properties.length > 0 ? (
          properties.map((property) => (
            <Col key={property.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={property.picture} alt={property.type} />
                <Card.Body>
                  <Card.Title>{property.type} - {property.bedrooms} Beds</Card.Title>
                  <Card.Text>
                    {property.location}
                    <br />
                    £{property.price.toLocaleString()}
                  </Card.Text>
                  <Button
                    variant="link"
                    className="p-0"
                    onClick={() => handleFavoriteToggle(property.id)}
                  >
                    {favorites.includes(property.id) ? <BsBookmarkFill /> : <BsBookmark />}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => (window.location.href = property.url)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No properties match your search criteria.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Properties;
