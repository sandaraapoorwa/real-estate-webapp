import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './SignupPopup.css';

const SignupPopup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter an email');
    } else if (!termsAccepted) {
      setError('You must accept the Terms of Use and Privacy Policy');
    } else {
      setError('');
      alert(`Email Submitted: ${email}`);
      setShow(false);
    }
  };

  const handleFacebookLogin = () => {
    alert("Logging in with Facebook");
    // Add your Facebook login logic here
  };

  const handleGoogleLogin = () => {
    alert("Logging in with Google");
    // Add your Google login logic here
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="signup-button">
        Sign Up or Log In
      </Button>

      <Modal show={show} onHide={handleClose} centered className="signup-modal">
        <Modal.Header closeButton>
          <Modal.Title>Sign Up or Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!error}
                className="modern-input"
              />
              <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox"
                label="I accept Dream Home Realty's Terms of Use and Privacy Policy."
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                isInvalid={!!error}
                className={`modern-checkbox ${termsAccepted ? "checkbox-highlight" : ""}`}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3 modern-button">
              Submit
            </Button>
          </Form>

          <div className="text-center my-3 or-divider">
            <span>OR</span>
          </div>

          <Button
            variant="outline-primary"
            className="w-100 mb-3 social-button facebook-button"
            onClick={handleFacebookLogin}
          >
            <i className="bi bi-facebook me-2"></i>
            Continue with Facebook
          </Button>
          
          <Button
            variant="outline-secondary"
            className="w-100 social-button google-button"
            onClick={handleGoogleLogin}
          >
            <i className="bi bi-google me-2"></i>
            Sign Up with Google
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupPopup;

