import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import propertiesData from '../data/properties.json';
import FavoritesTab from './FavoritesTab';
import './Properties.css';

const FavoriteCount = ({ count }) => (
  <span className="favorite-count">{count}</span>
);

const Properties = () => {
  const [properties, setProperties] = useState(propertiesData.properties);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.searchParams) {
      const { type, minPrice, maxPrice, minBedrooms, maxBedrooms, dateAdded, postcodeArea } = location.state.searchParams;

      const filteredProperties = propertiesData.properties.filter((property) => {
        const matchesType = type === 'any' || property.type.toLowerCase() === type.toLowerCase();
        const matchesPrice = (!minPrice || property.price >= minPrice) && (!maxPrice || property.price <= maxPrice);
        const matchesBedrooms = (!minBedrooms || property.bedrooms >= minBedrooms) && (!maxBedrooms || property.bedrooms <= maxBedrooms);
        
        const propertyDate = new Date(property.Dateadded);
        const matchesDate = !dateAdded || (propertyDate && propertyDate >= new Date(dateAdded));
        
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

  const renderPropertyCard = (property) => (
    <Col key={property.id} sm={12} md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={property.picture} alt={property.type} />
        <Card.Body>
          <Card.Title>{property.name} - {property.bedrooms} Beds</Card.Title>
          <Card.Text>
            {property.location}
            <br />
            £{property.price.toLocaleString()}
            <br />
            Added: {property.Dateadded}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              variant="primary"
              onClick={() => (window.location.href = property.url)}
            >
              View Details
            </Button>
            <Button
              variant="link"
              className="p-0"
              onClick={() => handleFavoriteToggle(property.id)}
            >
              {favorites.includes(property.id) ? (
                <BsBookmarkFill size={20} />
              ) : (
                <BsBookmark size={20} />
              )}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Container>
      <Nav variant="tabs" className="mb-3">
        <Nav.Item>
          <Nav.Link active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
            All Properties
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            active={activeTab === 'favorites'} 
            onClick={() => setActiveTab('favorites')}
            className="d-flex align-items-center position-relative px-4 py-2"
          >
            Favorites
            {favorites.length > 0 && <FavoriteCount count={favorites.length} />}
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === 'all' ? (
        <Row>
          {properties.length > 0 ? (
            properties.map(renderPropertyCard)
          ) : (
            <Col>
              <p>No properties match your search criteria.</p>
            </Col>
          )}
        </Row>
      ) : (
        <FavoritesTab
          favorites={favorites}
          properties={properties}
          onFavoriteToggle={handleFavoriteToggle}
          renderPropertyCard={renderPropertyCard}
        />
      )}
    </Container>
  );
};

export default Properties;

