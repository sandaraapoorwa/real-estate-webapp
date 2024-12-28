import React from 'react';
import { Row, Col } from 'react-bootstrap';

const FavoritesTab = ({ favorites, properties, onFavoriteToggle, renderPropertyCard }) => {
  const favoriteProperties = properties.filter((property) => favorites.includes(property.id));

  return (
    <Row>
      {favoriteProperties.length > 0 ? (
        favoriteProperties.map(renderPropertyCard)
      ) : (
        <Col>
          <p>You haven't added any properties to your favorites yet.</p>
        </Col>
      )}
    </Row>
  );
};

export default FavoritesTab;

