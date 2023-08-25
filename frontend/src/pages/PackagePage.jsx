
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PackageDetail from "../pages/PackageDetail";
import img01 from "../assets/all-images/utensil-img/gl.jpeg";
import Checkout from "./Checkout";

const PackagePage = () => {
const [selectedPackage, setSelectedPackage] = useState(null);

const packages = [
{
id: 1,
name: "Wedding Package",
description: "Everything you need for your wedding day.",
image:"https://dummyimage.com/300x200/000/fff",
items: [
{
id: 1,
name: "Chafing Dishes",
price: 10,
quantity: 0,
},
{
id: 2,
name: "Dinner Plates",
price: 1,
quantity: 0,
},
{
id: 3,
name: "Flatware Sets",
price: 2,
quantity: 0,
},
],
},
{
id: 2,
name: "Birthday Party Package",
description: "Celebrate your birthday in style.",
image:"https://dummyimage.com/300x200/000/fff",
items: [
{
id: 1,
name: "Cupcake Stands",
price: 5,
quantity: 0,
},
{
id: 2,
name: "Tablecloths",
price: 3,
quantity: 0,
},
{
id: 3,
name: "Napkins",
price: 1,
quantity: 0,
},
],
},

];

const handleAddToCart = (itemId) => {
const packageIndex = packages.findIndex(
(pkg) => pkg.id === selectedPackage.id
);
const itemIndex = packages[packageIndex].items.findIndex(
(item) => item.id === itemId
);


packages[packageIndex].items[itemIndex].quantity += 1;
setSelectedPackage({ ...selectedPackage, items: packages[packageIndex].items });
};

const handleRemoveFromCart = (itemId) => {
const packageIndex = packages.findIndex(
(pkg) => pkg.id === selectedPackage.id
);
const itemIndex = packages[packageIndex].items.findIndex(
(item) => item.id === itemId
);


if (packages[packageIndex].items[itemIndex].quantity > 0) {
  packages[packageIndex].items[itemIndex].quantity -= 1;
  setSelectedPackage({ ...selectedPackage, items: packages[packageIndex].items });
}
};

return (
<Container className="my-5">
<Row className="mb-5">
<Col>
<h1 className="text-center"></h1>
</Col>
</Row>
<Row>
    {packages.map((pkg) => (
      <Col key={pkg.id} md={4}>
        <Card className="mb-4">
          <Card.Body>
          <Card.Img variant="top" src={pkg.image} style={{ padding:0, borderRadius: 0 }} />
            <Card.Title>{pkg.name}</Card.Title>
            <Card.Text>{pkg.description}</Card.Text>
            
            <Button variant="primary" onClick={() => setSelectedPackage(pkg)}>
              <Link to="/pack">View Details</Link>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  <Row>
  <Col md={8}>
    {selectedPackage && (
      <PackageDetail
        package={selectedPackage}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    )}
  </Col>
  <Col md={4}>
    {selectedPackage && (
      <Checkout
        package={selectedPackage}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    )}
  </Col>
</Row>
</Container>
);
};

export default PackagePage;