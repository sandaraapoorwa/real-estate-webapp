import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsBookmarkFill } from 'react-icons/bs';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const FavoritesTab = ({ favorites, properties, onFavoriteToggle, onReorderFavorites }) => {
  const favoriteProperties = favorites.map(id => properties.find(property => property.id === id)).filter(Boolean);

  return (
    <Droppable droppableId="favorites-list">
      {(provided) => (
        <div 
          className="favorites-list" 
          {...provided.droppableProps} 
          ref={provided.innerRef}
        >
          {favoriteProperties.length > 0 ? (
            favoriteProperties.map((property, index) => (
              <Draggable key={property.id} draggableId={property.id.toString()} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`favorite-card-wrapper mb-2 ${snapshot.isDragging ? 'is-dragging' : ''}`}
                  >
                    <Card className="favorite-card">
                      <Card.Img variant="top" src={property.picture} alt={property.type} />
                      <Card.Body className="p-2">
                        <Card.Title className="h6 mb-1">{property.name}</Card.Title>
                        <Card.Text className="small mb-1">
                          £{property.price.toLocaleString()} - {property.bedrooms} Beds
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => window.open(property.url, '_blank')}
                          >
                            View Details
                          </Button>
                          <Button
                            variant="link"
                            className="p-0"
                            onClick={() => onFavoriteToggle(property.id)}
                          >
                            <BsBookmarkFill size={16} />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              </Draggable>
            ))
          ) : (
            <p>You haven't added any properties to your favorites yet.</p>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default FavoritesTab;

