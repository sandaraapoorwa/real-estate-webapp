import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Thank you for your message. We'll get back to you soon!
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Our Office</h2>
          <p>123 Real Estate Street</p>
          <p>Cityville, State 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@dreamhomerealty.com</p>
          <h3 className="mt-4">Office Hours</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: Closed</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
