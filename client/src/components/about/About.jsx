import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = ['mission', 'team', 'whyChooseUs', 'teamImages'];
    let delay = 0;

    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections((prev) => [...prev, section]);
      }, delay);
      delay += 500; // Delay in milliseconds for each section
    });
  }, []);

  return (
    <Container className="about-container my-5">
      <h1 className="text-center mb-4">About Dream Home Realty</h1>
      <Row>
        <Col
          md={6}
          className={`about-section ${
            visibleSections.includes('mission') ? 'visible' : ''
          }`}
        >
          <h2>Our Mission</h2>
          <p>
            At Dream Home Realty, we are dedicated to helping you find the perfect home that matches your lifestyle and aspirations. With years of experience in the real estate market, we provide unparalleled service and expertise to our clients.
          </p>
        </Col>
        <Col
          md={6}
          className={`about-section ${
            visibleSections.includes('team') ? 'visible' : ''
          }`}
        >
          <h2>Our Team</h2>
          <p>
            Our team of experienced real estate professionals is committed to providing personalized service and expert guidance throughout your home buying or selling journey. We pride ourselves on our in-depth market knowledge and dedication to client satisfaction.
          </p>
        </Col>
      </Row>
      <Row
        className={`team-images-row mt-4 ${
          visibleSections.includes('teamImages') ? 'visible' : ''
        }`}
      >
        <Col md={4} className="d-flex justify-content-center mb-3">
          <img
            src="/assets/photos/team1.jpg"
            alt="Team Member 1"
            className="team-image"
          />
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-3">
          <img
            src="/assets/photos/team2.jpg"
            alt="Team Member 2"
            className="team-image"
          />
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-3">
          <img
            src="/assets/photos/team3.jpg"
            alt="Team Member 3"
            className="team-image"
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col
          className={`about-section ${
            visibleSections.includes('whyChooseUs') ? 'visible' : ''
          }`}
        >
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Extensive local market knowledge</li>
            <li>Personalized service tailored to your needs</li>
            <li>Cutting-edge technology and marketing strategies</li>
            <li>Strong negotiation skills to get you the best deal</li>
            <li>Commitment to integrity and transparency</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
