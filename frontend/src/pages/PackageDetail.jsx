import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const PackageDetail = ({ package: pkg, handleAddToCart, handleRemoveFromCart }) => {
  const [cartItems, setCartItems] = useState(pkg.items);

  const handleUpdateCart = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <Row>
        
        <Col md={6}>
          <h2>{pkg.name}</h2>
          <p>{pkg.description}</p>
          <h3>Items Included:</h3>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>
                <strong>{item.name}</strong> - ${item.price.toFixed(2)}
              </p>
              <div>
                <button onClick={() => handleUpdateCart(item.id, Math.max(0, item.quantity - 1))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleUpdateCart(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
          ))}
          <hr />
          <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default PackageDetail;
