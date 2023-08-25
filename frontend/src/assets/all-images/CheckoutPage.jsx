import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import CartSummary from "./CartSummary";
import {Link} from 'react-router-dom';
import './CheckoutPage.css';


const CheckoutPage = ( handleContinue) => {
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [shippingOption, setShippingOption] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };

  const handleShippingOptionChange = (e) => {
    setShippingOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Address: ", address);
    console.log("Zipcode: ", zipcode);
    console.log("Shipping Option: ", shippingOption);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleContinue({ firstName, lastName, address, phoneNo, email });
  };
  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h2>Billing Information</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name"  value={firstName}
          onChange={(e) => setFirstName(e.target.value)} required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name"  value={lastName}
          onChange={(e) => setLastName(e.target.value)}required />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number"   value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}required />
          </Form.Group>

          <Form.Group controlId="formGridEmailAddress">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
            
          onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGridZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter zipcode"
              value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Shipping Option</Form.Label>
            <Form.Check
              type="radio"
              label="Shipping Address"
              name="shippingOption"
              value="shipping"
              checked={shippingOption === "shipping"}
              onChange={handleShippingOptionChange}
              required
            />
            <Form.Check
              type="radio"
              label="Pickup"
              name="shippingOption"
              value="pickup"
              checked={shippingOption === "pickup"}
              onChange={handleShippingOptionChange}
              required
            />
          </Form.Group>

          {shippingOption === "shipping" && (
            <Form.Group controlId="formGridShippingAddress">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control type="text" placeholder="Enter shipping address" required />
            </Form.Group>
          )}

          {shippingOption === "pickup" && (
            <div className="pickup-location">
              <p>Pick up location:</p>
              <p>123 Main St, Anytown, USA</p>
            </div>
          )}

          <Button variant="primary" type="submit">
            <Link to='/BillPage'>Continue to Payment</Link>
         </Button>
        </Form>
      </div>
      <CartSummary/>
     </div>
  )
          }

  export default CheckoutPage;
