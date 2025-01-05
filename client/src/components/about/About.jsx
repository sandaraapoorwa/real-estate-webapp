import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import logo from '../Photos/logo.png';

const About = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = ['mission', 'whyChooseUs', 'team', 'teamImages'];
    let delay = 0;

    sections.forEach((section) => {
      setTimeout(() => {
        setVisibleSections((prev) => [...prev, section]);
      }, delay);
      delay += 200; // Stagger animations for a smooth experience
    });
  }, []);

  return (
    <Container className="about-container my-5">
      <div className="text-center">
        <img src={logo} alt="Logo" className="about-logo mb-4" />
      </div>

      {/* Mission Section */}
      <Row className={`about-section ${visibleSections.includes('mission') ? 'visible' : ''}`}>
        <Col md={12}>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At Dream Home Realty, we are dedicated to helping you find the perfect home that matches your lifestyle and aspirations. With years of experience in the real estate market, we provide unparalleled service and expertise to our clients.
          </p>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <Row className={`about-section ${visibleSections.includes('whyChooseUs') ? 'visible' : ''}`}>
        <Col md={12}>
          <h2 className="section-title">Why Choose Us?</h2>
          <ul className="feature-list">
            <li>Extensive local market knowledge</li>
            <li>Personalized service tailored to your needs</li>
            <li>Cutting-edge technology and marketing strategies</li>
            <li>Strong negotiation skills to get you the best deal</li>
            <li>Commitment to integrity and transparency</li>
          </ul>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className={`about-section ${visibleSections.includes('team') ? 'visible' : ''}`}>
        <Col md={12}>
          <h2 className="section-title">Our Team</h2>
          <p className="section-text">
            Our team of experienced real estate professionals is committed to providing personalized service and expert guidance throughout your home-buying or selling journey. We pride ourselves on our in-depth market knowledge and dedication to client satisfaction.
          </p>
        </Col>
      </Row>

      {/* Team Images Section */}
      <Row className={`team-images-row ${visibleSections.includes('teamImages') ? 'visible' : ''}`}>
        <Col md={4} className="team-member">
          <img src="/Photos/member.jpg" alt="Team Member 1" className="team-image" />
          <p className="team-caption">John Doe - Real Estate Agent</p>
        </Col>
        <Col md={4} className="team-member">
          <img src="/Photos/member2.jpg" alt="Team Member 2" className="team-image" />
          <p className="team-caption">Jane Smith - Property Consultant</p>
        </Col>
        <Col md={4} className="team-member">
          <img src="/Photos/member3.jpeg" alt="Team Member 3" className="team-image" />
          <p className="team-caption">Emily Johnson - Marketing Specialist</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
