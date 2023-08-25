import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PackageDetails = ({ packageData }) => {
  const total = packageData.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  
  // Dummy package data
  const dummyPackageData = {
    name: 'Premium Package',
    description: 'This package includes premium features such as high-quality materials and advanced technology.',
    items: [
      {
        id: 1,
        name: 'Premium Materials',
        quantity: 1,
        price: 100
      },
      {
        id: 2,
        name: 'Advanced Technology',
        quantity: 1,
        price: 200
      }
    ]
  };
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>{dummyPackageData.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{dummyPackageData.description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Items:</h3>
          <ul>
            {dummyPackageData.items.map(item => (
              <li key={item.id}>{item.name} - {item.quantity} x ${item.price}</li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">Rent Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PackageDetails;
