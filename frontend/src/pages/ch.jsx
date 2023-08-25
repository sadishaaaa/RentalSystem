// currcode
// import React, { useState } from 'react';
// import { Form, Button, Row, Col } from 'react-bootstrap';
// import KhaltiCheckout from "khalti-checkout-web";
// import config from "../assets/khalti/khaltiConfig";
// import { AuthContext } from "../assets/context/authcontext";
// import { Link, useLocation } from 'react-router-dom';
// import { useContext } from 'react';
// import "./CheckoutPage.css";

// const Checkout = () => {
//   const { currentUser } = useContext(AuthContext);
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const total = searchParams.get('total');
//   const itemName = searchParams.get('item');
//   const [fullName, setFullName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [emailAddress, setEmailAddress] = useState('');
//   const [address, setAddress] = useState('');
//   const [shippingOption, setShippingOption] = useState('');
//   let checkout = new KhaltiCheckout(config);
//   const handleSubmit = (event) => {
//     event.preventDefault();

   
//     // Your logic to handle form submission and pass paymentData to "/payment" route
//   };

//   return (
//     <div className="checkout-page">
//       <h2>Billing Information</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicFullName">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter full name"
//             value={currentUser.customerName}
//             onChange={(e) => setFullName(e.target.value)}
//             readOnly
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPhoneNumber">
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control
//             type="tel"
//             placeholder="Enter phone number"
//             value={currentUser.contact_no}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             readOnly
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicEmailAddress">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email address"
//             value={currentUser.email}
//             onChange={(e) => setEmailAddress(e.target.value)}
//             readOnly
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicAddress">
//           <Form.Label>Address</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter address"
//             value={currentUser.address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             readOnly
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPrice">
//           <Form.Label>Total</Form.Label>
//           <Form.Control
//             type="text"
//             value={total}
//             readOnly
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicShippingOption">
//           <Form.Label>Shipping Option</Form.Label>
//           <Row>
//             <Col>
//               <Form.Check
//                 type="radio"
//                 label="Shipping Address"
//                 name="shippingOption"
//                 value="shipping"
//                 checked={shippingOption === 'shipping'}
//                 onChange={() => setShippingOption('shipping')}
//                 required
//               />
//             </Col>
//             <Col>
//               <Form.Check
//                 type="radio"
//                 label="Pickup"
//                 name="shippingOption"
//                 value="pickup"
//                 checked={shippingOption === 'pickup'}
//                 onChange={() => setShippingOption('pickup')}
//                 required
//               />
//             </Col>
//           </Row>
//         </Form.Group>

//         {shippingOption === 'shipping' && (
//           <Form.Group controlId="formBasicShippingAddress">
//             <Form.Label>Shipping Address</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter shipping address"
//               required
//             />
//           </Form.Group>
//         )}

//         {shippingOption === 'pickup' && (
//           <>
//             <h2>Pickup Information</h2>
//             <p>Please pick up your order at our location:</p>
//             <p>7, Tarkeshwor, Kathmandu</p>
//           </>
//         )}

//         <br />
//         <br />
//         <h4 style={{ color: "black" }}>Rented Product</h4>
//         <p>{itemName}</p>
//         <Button
//       type="submit"
//       style={{ backgroundColor: 'orange', color: 'white', fontWeight: 'bold', textDecoration: "none", border: '1px solid white' }}
//     >
//       <Link to={`/payment?fullName=${currentUser.customerName}&phoneNumber=${currentUser.contact_no}&emailAddress=${currentUser.email}&address=${currentUser.address}&shippingOption=${shippingOption}&total=${total}&item=${itemName}`}>Payment</Link>
//     </Button>

//         <Button
//           type="submit"
//           onClick={() => checkout.show({amount: 500})}
//           style={{ backgroundColor: 'purple', color: 'white', fontWeight: 'bold', border: '1px solid white' }}
//         >
//           Pay Via Khalti
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Checkout;
