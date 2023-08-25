import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import { message } from "antd";
import { AuthContext } from "../assets/context/authcontext";
import { useContext } from "react";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";


const Contact = () => {
  const { currentUser } = useContext(AuthContext);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const messageValue = event.target.formMessage.value;

  if (!messageValue) {
    // Display an alert if the message field is empty
    message.error("Please fill out the message field.");
    return;
  }

    const formData = {
      customer_id: currentUser.customer_id,
      customer_name: currentUser.customerName,
      contactNumber: currentUser.contact_no,
      email: currentUser.email, // Replace 'address' with the actual key for the address data in currentUser.
      message: messageValue,
    };

    try {
      // Replace 'API_URL' with the actual backend API URL
      const response = await fetch("http://localhost:5000/api/contact/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });

      message.success("Your message has been sent successfully.");
      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }
  
      
      

      // Handle successful form submission here (e.g., show success message).
    } catch (error) {
      console.error(error);
      // Handle error here (e.g., show error message).
    }
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <h2>Contact Us</h2>
          <Form className="contact-form" onSubmit={handleSubmit}>
            <h3>Get in Touch</h3>
            
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                value={currentUser.customerName}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={currentUser.email} readOnly />
            </Form.Group>
            <Form.Group controlId="formContactNo">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="tel" value={currentUser.contact_no} readOnly />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
