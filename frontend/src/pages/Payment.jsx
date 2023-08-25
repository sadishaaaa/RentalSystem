import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import QR from "../assets/all-images/QR.png";
import { AuthContext } from "../assets/context/authcontext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Modal } from 'antd';

function PaymentPage(props) {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [address, setAddress] = useState('');
  const [shippingOption, setShippingOption] = useState('');
  const [total, setTotal] = useState('');
  const [itemName, setItemName] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formImage = new FormData();
    formImage.append("file", file);
    formImage.append("upload_preset", "Images");
    formImage.append("cloud_name", "daxihhqqp");

    axios
      .post("https://api.cloudinary.com/v1_1/daxihhqqp/image/upload", formImage)
      .then((response) => {
        setFile(response.data.secure_url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('phoneNumber', phoneNumber);
    formData.append('emailAddress', emailAddress);
    formData.append('address', address);
    formData.append('shippingOption', shippingOption);
    formData.append('total', total);
    formData.append('proofOfPayment', file);
    formData.append('itemName', itemName);
    const formDataObj = Object.fromEntries(formData);
    console.log(formData);
    try {
      const reviewResponse = await axios.post("http://localhost:5000/api/rent/createRent", formDataObj);
      const reviewData = reviewResponse.data;
      console.log("Review submitted successfully!", reviewData);
      window.location.href = "/home"
    
       setShowModal(true);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFile(null);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  React.useEffect(() => {
    setFullName(searchParams.get('fullName'));
    setPhoneNumber(searchParams.get('phoneNumber'));
    setEmailAddress(searchParams.get('emailAddress'));
    setAddress(searchParams.get('address'));
    setShippingOption(searchParams.get('shippingOption'));
    setTotal(searchParams.get('total'));
    setItemName(searchParams.get('item'));
  }, [searchParams]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          {/* <Card>
            <Card.Body className="text-center">
              <h1>Scan and Pay</h1>
              <img src={QR} alt="Scan and Pay" className="img-fluid" />
              <br /><br />
            </Card.Body>
          </Card> */}

          <Card>
            <Card.Title>Order Details</Card.Title>
            <Card.Body className="text-center">
              <p><strong>Full Name:</strong> {fullName}</p>
              <p><strong>Phone Number:</strong> {phoneNumber}</p>
              <p><strong>Email Address:</strong> {emailAddress}</p>
              <p><strong>Address:</strong> {address}</p>
              <p><strong>Shipping Option:</strong> {shippingOption}</p>
              <p><strong>Total:</strong> {total}</p>
              <p><strong>RentedItem:</strong> {itemName}</p>
            </Card.Body>
            <Card.Footer>
              <Form onSubmit={handleSubmit}>
                {/* <Form.Group controlId="proofOfPayment">
                  <Form.Label>Upload proof of payment</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={handleFileUpload} />
                </Form.Group> */}
                <Button type="submit">Confirm Order</Button>
              </Form>
            </Card.Footer>
          </Card>
{/* 
          <Modal visible={showModal} onCancel={handleCloseModal} footer={null}>
            <Modal.Header closeButton>
              <Modal.Title>Thank you for Renting from us.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>We will contact you within 24 hours. Please have patience. If it's an emergency, please call +977 9869029494 or email at infobhadakuda@gmail.com</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseModal}>Okay</Button>
            </Modal.Footer>
          </Modal> */}
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentPage;