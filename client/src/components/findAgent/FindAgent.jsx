import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';

const FindAgent = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    expertise: '',
  });

  const [agents, setAgents] = useState([
    {
      id: 1,
      name: 'Jane Doe',
      location: 'Colombo',
      expertise: 'Residential Properties',
      photo: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'John Smith',
      location: 'Kandy',
      expertise: 'Commercial Properties',
      photo: 'https://via.placeholder.com/100',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    // Filter logic can be added here based on searchParams
    console.log('Search Params:', searchParams);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Find an Agent</h1>
      <Form className="bg-light bg-opacity-75 p-4 rounded-lg shadow-sm mb-4">
        <Row className="g-2">
          <Col md={6}>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city or area"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="border-0 bg-white bg-opacity-75"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="expertise">
              <Form.Label>Expertise</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Residential, Commercial"
                name="expertise"
                value={searchParams.expertise}
                onChange={handleInputChange}
                className="border-0 bg-white bg-opacity-75"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mt-4">
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </Form>

      <Row className="g-4">
        {agents.map((agent) => (
          <Col md={4} key={agent.id}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={agent.photo} alt={`${agent.name}`} />
              <Card.Body>
                <Card.Title>{agent.name}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {agent.location} <br />
                  <strong>Expertise:</strong> {agent.expertise}
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FindAgent;
