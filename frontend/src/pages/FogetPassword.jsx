import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import "../styles/ForgetPassword.css"

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', { email });
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setSuccessMessage('');
    }
  };

  return (
    <Card style={{ maxWidth: 400, margin: '6rem auto' }}>
      <Card.Body>
        <Card.Title>Forgot Password</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {successMessage && (
            <Alert variant="success" style={{ marginTop: 10 }}>
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert variant="danger" style={{ marginTop: 10 }}>
              {errorMessage}
            </Alert>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ForgotPassword;
