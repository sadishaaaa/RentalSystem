import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PackageCard = ({ packageData }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={packageData.image} />
      <Card.Body>
        <Card.Title>{packageData.name}</Card.Title>
        <Card.Text>
          {packageData.description}
        </Card.Text>
        <Link to={`/package/${packageData.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PackageCard;
