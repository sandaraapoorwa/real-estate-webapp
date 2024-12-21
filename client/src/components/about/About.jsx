import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About Dream Home Realty</h2>
      <Row>
        <Col md={6}>
          <p>
            Dream Home Realty is a leading real estate agency dedicated to helping you find your perfect home. With years of experience and a passionate team of experts, we provide unparalleled service in the real estate market.
          </p>
        </Col>
        <Col md={6}>
          <p>
            Our mission is to make the process of buying, selling, or renting properties as smooth and enjoyable as possible. We pride ourselves on our in-depth market knowledge, personalized approach, and commitment to client satisfaction.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

