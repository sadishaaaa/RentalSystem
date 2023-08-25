import { useState } from 'react';
import { Modal, Button, Form, Card } from 'react-bootstrap';

function AddProductModal({ show, onHide, onProductAdd }) {
  const [file, setFile] = useState(null);
  const [productName, setProductName] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  }

  const handleProductSizeChange = (event) => {
    setProductSize(event.target.value);
  }

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  }

  const handleUploadClick = () => {
    // Create a new product object with the uploaded data
    const newProduct = {
      image: URL.createObjectURL(file),
      name: productName,
      size: productSize,
      description: productDescription,
    };

    // Call the onProductAdd function with the new product object
    onProductAdd(newProduct);

    // Hide the modal
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="productImage">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" onChange={handleProductNameChange} />
          </Form.Group>
          <Form.Group controlId="productSize">
            <Form.Label>Product Size</Form.Label>
            <Form.Control as="select" onChange={handleProductSizeChange}>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="productDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleProductDescriptionChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUploadClick}>
          Upload Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddProductModal;