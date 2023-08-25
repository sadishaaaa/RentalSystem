import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const BillPage = ({ firstName, lastName, address, phoneNo, email }) => {
  const [showReceipt, setShowReceipt] = useState(false);

  const handleShowReceipt = () => {
    setShowReceipt(true);
  };

  return (
    <Card>
      <Card.Header>Checkout Summary</Card.Header>
      <Card.Body>
        <Card.Title>Shipping Information</Card.Title>
        <Card.Text>
          Name: {firstName} {lastName}
          <br />
          Address: {address}
          <br />
          Phone Number: {phoneNo}
          <br />
          Email: {email}
        </Card.Text>
        <Button onClick={handleShowReceipt}>Generate Receipt</Button>
        {showReceipt && (
          <>
            <hr />
            <Card.Title>Receipt</Card.Title>
            <Card.Text>
              Total amount: $50
              <br />
              Payment method: Credit card
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default BillPage;
