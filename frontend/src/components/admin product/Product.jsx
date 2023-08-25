import { useState } from 'react';
import { Button,Card } from 'react-bootstrap';
import AddProductModal from './AddProductModal';

function Product() {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);
  
    const handleAddProductClick = () => {
      setShowModal(true);
    }
  
    const handleModalHide = () => {
      setShowModal(false);
    }
  
    const handleProductAdd = (newProduct) => {
      // Add the new product to the products array
      setProducts([...products, newProduct]);
    }
  return (
    <div>
    <Button variant="primary" onClick={handleAddProductClick}>
      Add New
      </Button>
      <br />
      <br />
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>              
                  <small className="text-muted">{product.size}</small>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <AddProductModal show={showModal} onHide={handleModalHide} onProductAdd={handleProductAdd} />
    </div>
  );
}

 
export default Product;
