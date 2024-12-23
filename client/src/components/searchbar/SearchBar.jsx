import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../searchbar/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAdded: '',
    postcodeArea: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(searchParams).every(value => value !== '')) {
      onSearch(searchParams);
      navigate('/properties', { state: { searchParams } });
    } else {
      alert('Please fill in all fields before searching.');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="search-bar bg-white p-4 rounded-lg shadow">
      <Row className="g-3">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Property Type</Form.Label>
            <Form.Select 
              name="type" 
              value={searchParams.type} 
              onChange={handleInputChange}
              required
            >
              <option value="">Select Type</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Price Range</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="number"
                placeholder="Min"
                name="minPrice"
                value={searchParams.minPrice}
                onChange={handleInputChange}
                className="me-2"
                required
              />
              <Form.Control
                type="number"
                placeholder="Max"
                name="maxPrice"
                value={searchParams.maxPrice}
                onChange={handleInputChange}
                required
              />
            </div>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Bedrooms</Form.Label>
            <div className="d-flex">
              <Form.Control
                type="number"
                placeholder="Min"
                name="minBedrooms"
                value={searchParams.minBedrooms}
                onChange={handleInputChange}
                className="me-2"
                required
              />
              <Form.Control
                type="number"
                placeholder="Max"
                name="maxBedrooms"
                value={searchParams.maxBedrooms}
                onChange={handleInputChange}
                required
              />
            </div>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Date Added</Form.Label>
            <Form.Control
              type="date"
              name="dateAdded"
              value={searchParams.dateAdded}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group>
            <Form.Label>Postcode</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., BR1"
              name="postcodeArea"
              value={searchParams.postcodeArea}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={12} className="mt-3">
          <Button 
            variant="primary" 
            type="submit" 
            className="w-100 d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-search me-2"></i>
            Search Properties
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;

