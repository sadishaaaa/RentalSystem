import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

const ProductPage = ({ products }) => {
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex((item) => item.product.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === 'highToLow' ? b.price - a.price : a.price - b.price));

  return (
    <Container>
      <Row className="mt-3">
        <Col md={4}>
          <InputGroup>
            <FormControl type="text" placeholder="Search products" value={searchTerm} onChange={handleSearchTermChange} />
          </InputGroup>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup>
            <FormControl as="select" value={sortOrder} onChange={handleSortOrderChange}>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </FormControl>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        {filteredProducts.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-3">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Size: {product.size}
                </Card.Text>
                <InputGroup>
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={() => handleAddToCart(product, -1)}>-</Button>
                  </InputGroup.Prepend>
                  <FormControl type="text" value={cart.find((item) => item.product.id === product.id)?.quantity || 0} readOnly />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => handleAddToCart(product, 1)}>+</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" onClick={() => handleAddToCart(product, 1)}>Rent Now</Button>
                <Button className="ml-2" variant="secondary" onClick={() => handleAddToCart(product, 1)}>Add to Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
