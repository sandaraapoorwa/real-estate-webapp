import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAddedAfter: '',
    dateAddedBefore: '',
    postcodeArea: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };
  return (
    <Form onSubmit={handleSubmit} className="bg-light bg-opacity-75 p-4 rounded-lg shadow-sm">
      <Row className="g-2">
        <Col md={2}>
          <Form.Label>Property Type</Form.Label>
          <Form.Select 
            name="type" 
            value={searchParams.type} 
            onChange={handleInputChange}
            className="border-0 bg-white bg-opacity-85"
          >
            <option value="any">Any Type</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Label>Price Range</Form.Label>
          <Form.Control
            type="number"
            placeholder="Min Price"
            name="minPrice"
            value={searchParams.minPrice}
            onChange={handleInputChange}
            className="border-0 bg-white bg-opacity-75"
          />
        </Col>
        <Col md={2}>
          <Form.Label>&nbsp;</Form.Label>
          <Form.Control
            type="number"
            placeholder="Max Price"
            name="maxPrice"
            value={searchParams.maxPrice}
            onChange={handleInputChange}
            className="border-0 bg-white bg-opacity-75"
          />
        </Col>
        <Col md={2}>
          <Form.Label>Bedrooms</Form.Label>
          <Row className="g-2">
            <Col>
              <Form.Control
                type="number"
                placeholder="Min"
                name="minBedrooms"
                value={searchParams.minBedrooms}
                onChange={handleInputChange}
                className="border-0 bg-white bg-opacity-75"
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Max"
                name="maxBedrooms"
                value={searchParams.maxBedrooms}
                onChange={handleInputChange}
                className="border-0 bg-white bg-opacity-75"
              />
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <Form.Label>Date Added</Form.Label>
          <Row className="g-2">
            <Col>
              <Form.Control
                type="date"
                placeholder="From"
                name="dateAddedAfter"
                value={searchParams.dateAddedAfter}
                onChange={handleInputChange}
                className="border-0 bg-white bg-opacity-75"
              />
            </Col>
            <Col>
              <Form.Control
                type="date"
                placeholder="To"
                name="dateAddedBefore"
                value={searchParams.dateAddedBefore}
                onChange={handleInputChange}
                className="border-0 bg-white bg-opacity-75"
              />
            </Col>
          </Row>
        </Col>
        <Col md={1}>
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="BR1"
            name="postcodeArea"
            value={searchParams.postcodeArea}
            onChange={handleInputChange}
            className="border-0 bg-white bg-opacity-75"
          />
        </Col>
        <Col md={1}>
          <Form.Label>&nbsp;</Form.Label>
          <Button 
            variant="primary" 
            type="submit" 
            className="w-100 d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-search"></i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;

