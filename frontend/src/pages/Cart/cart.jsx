import React, { useState, useEffect } from 'react';
import "./Cart.css"
import { Button, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout'

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // load cart items from local storage on mount
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(savedCartItems);
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]); // add item to cart
    localStorage.setItem("cartItems", JSON.stringify([...cart, item]));
  };

  const handleDelete = (id) => {
    const newCartItems = cart.filter(item => item.id !== id);
    setCart(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }

  const initialSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [subtotal, setSubtotal] = useState(initialSubtotal);
  const [delivery, setDelivery] = useState(150);
  const [total, setTotal] = useState(subtotal + delivery);

  useEffect(() => {
    setSubtotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cart]);

  useEffect(() => {
    setTotal(subtotal + delivery);
  }, [subtotal, delivery]);


  return (
    <div className="cart-page">
      <div className="cart-product-list">
        {cart?.map((item) => (
          <Card key={item.id} className="cart-product-item" title={item.name} style={{ width: 300, marginBottom: 16 }}>
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
            {/* <p>Quantity: {item.quantity}</p> */}
            <p>Price: {item.price}</p>
            <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDelete(item.id)}>Remove from cart</Button>
          </Card>
        ))}
      </div>
      <div className="cart-total">
        <div className="cart-subtotal">Subtotal: {subtotal}</div>
        <div className="cart-delivery">Delivery: {delivery}</div>
        <div className="cart-grand-total">Total: {total}</div>
        <Button type="primary" className="cart-checkout"><Link to={`/checkout?total=${total}&item=${encodeURIComponent(cart.map(item => item.name).join(', '))}`}>Checkout</Link></Button>
      
      </div>
    </div>
  );
};

export default Cart;
