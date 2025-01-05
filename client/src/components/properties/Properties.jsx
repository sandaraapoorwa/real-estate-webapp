import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import propertiesData from '../data/properties.json';
import FavoritesTab from './FavoritesTab';
import './Properties.css';

const Properties = () => {
  const [properties, setProperties] = useState(propertiesData.properties);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const location = useLocation();

  // Filter properties based on search params in location state
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

  // Toggle favorite property
  const handleFavoriteToggle = (propertyId) => {
    setFavorites((prev) =>
      prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]
    );
  };

  // Reorder favorites
  const handleReorderFavorites = (newFavorites) => {
    setFavorites(newFavorites);
  };

  // Handle drag end event
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    if (source.droppableId === 'properties-list' && destination.droppableId === 'properties-list') {
      const reorderedProperties = Array.from(properties);
      const [reorderedItem] = reorderedProperties.splice(source.index, 1);
      reorderedProperties.splice(destination.index, 0, reorderedItem);
      setProperties(reorderedProperties);
    } else if (source.droppableId === 'favorites-list' && destination.droppableId === 'favorites-list') {
      handleReorderFavorites(
        favorites.map((id, index) =>
          index === source.index ? favorites[destination.index] :
          index === destination.index ? favorites[source.index] : id
        )
      );
    }
  };

  // Render each property card
  const renderPropertyCard = (property, index) => (
    <Draggable key={property.id} draggableId={property.id.toString()} index={index}>
      {(provided, snapshot) => (
        <Col sm={12} md={6} lg={4} className="mb-4" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card className={`property-card ${snapshot.isDragging ? 'is-dragging' : ''}`}>
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
                <Button variant="primary" onClick={() => window.open(property.url, '_blank')}>View Details</Button>
                <Button variant="link" className="p-0" onClick={() => handleFavoriteToggle(property.id)}>
                  {favorites.includes(property.id) ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Draggable>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container fluid className="properties-container">
        <Button className="favorites-toggle-btn" onClick={() => setShowFavorites(!showFavorites)} aria-expanded={showFavorites}>
          {showFavorites ? <BsChevronLeft /> : <BsChevronRight />}
          <span className="sr-only">Toggle Favorites</span>
          {favorites.length > 0 && <span className="favorites-count"> ({favorites.length})</span>}
        </Button>
        <Row>
          {/* Collapsible Sidebar for Favorites */}
          <Col sm={12} md={3} lg={2} className={`favorites-sidebar ${showFavorites ? 'show' : ''}`}>
            <h4>Favorites</h4>
            <FavoritesTab favorites={favorites} properties={properties} onFavoriteToggle={handleFavoriteToggle} onReorderFavorites={handleReorderFavorites} />
          </Col>

          {/* Main Properties Section */}
          <Col sm={12} md={showFavorites ? 9 : 12} lg={showFavorites ? 10 : 12} className="properties-section">
            <Droppable droppableId="properties-list" direction="horizontal">
              {(provided) => (
                <Row {...provided.droppableProps} ref={provided.innerRef}>
                  {properties.length > 0 ? (
                    properties.map(renderPropertyCard)
                  ) : (
                    <Col><p>No properties match your search criteria.</p></Col>
                  )}
                  {provided.placeholder}
                </Row>
              )}
            </Droppable>
          </Col>
        </Row>
      </Container>
    </DragDropContext>
  );
};

export default Properties;
