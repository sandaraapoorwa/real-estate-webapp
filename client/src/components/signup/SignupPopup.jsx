import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Facebook, Google } from 'react-bootstrap-icons'; // Adding Google icon
import './SignupPopup.css'; // Importing custom CSS for styling

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

  // Simulate Facebook login
  const handleFacebookLogin = () => {
    alert("Logging in with Facebook");
    // Add your Facebook login logic here
  };

  // Simulate Google login
  const handleGoogleLogin = () => {
    alert("Logging in with Google");
    // Add your Google login logic here
  };

  return (
    <>
      {/* Button to trigger the popup */}
      <Button variant="primary" onClick={handleShow}>
        Sign Up or Log In
      </Button>

      {/* Modal for Sign Up / Log In */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up or Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Email Form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!error}
              />
              <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            </Form.Group>

            {/* Terms and Conditions Checkbox */}
            <Form.Group className="mb-3">
              <Form.Check 
                type="checkbox"
                label="I accept Dream Home realty's Terms of Use and Privacy Policy."
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                isInvalid={!!error}
                className={termsAccepted ? "checkbox-highlight" : ""}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Submit
            </Button>
          </Form>

          <div className="text-center">OR</div>

          {/* Social Media Login Buttons */}
          <Button
            variant="outline-primary"
            className="w-100 mt-3 d-flex align-items-center justify-content-center"
            onClick={handleFacebookLogin} // Facebook login mock
          >
            <Facebook size={20} className="me-2" />
            Continue with Facebook
          </Button>
          
          <Button
            variant="outline-danger"
            className="w-100 mt-3 d-flex align-items-center justify-content-center"
            onClick={handleGoogleLogin} // Google login mock
          >
            <Google size={20} className="me-2" />
            Sign Up with Google
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupPopup;
