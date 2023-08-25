import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Package = () => {
  const [showModal, setShowModal] = useState(false);
  const [packageData, setPackageData] = useState({
    image: '',
    price: '',
    quantity: '',
    items: []
  });

  const handleModalClose = () => setShowModal(false);

  const handleAddPackage = () => setShowModal(true);

  const handlePackageDataChange = (e) => {
    setPackageData({
      ...packageData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddItem = () => {
    setPackageData({
      ...packageData,
      items: [...packageData.items, { name: '', price: '' }]
    });
  };

  const handleItemChange = (e, index, field) => {
    const newItems = [...packageData.items];
    newItems[index][field] = e.target.value;
    setPackageData({
      ...packageData,
      items: newItems
    });
  };

  const handlePackageUpload = () => {
    // Send packageData to backend to upload package
    console.log(packageData);
    handleModalClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleAddPackage}>
        Add Package
      </Button>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Package</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={packageData.image}
                onChange={handlePackageDataChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                name="price"
                value={packageData.price}
                onChange={handlePackageDataChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter quantity"
                name="quantity"
                value={packageData.quantity}
                onChange={handlePackageDataChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Items</Form.Label>
              {packageData.items.map((item, index) => (
                <div key={index}>
                  <Form.Control
                    type="text"
                    placeholder={`Enter item ${index + 1} name`}
                    value={item.name}
                    onChange={(e) => handleItemChange(e, index, 'name')}
                  />
                  <Form.Control
                    type="text"
                    placeholder={`Enter item ${index + 1} price`}
                    value={item.price}
                    onChange={(e) => handleItemChange(e, index, 'price')}
                  />
                </div>
              ))}
              <Button variant="secondary" onClick={handleAddItem}>
                Add Item
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePackageUpload}>
        Save
      </Button>
    </Modal.Footer>
  </Modal>
</>
);
};

export default Package;
