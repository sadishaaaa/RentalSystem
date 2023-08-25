import React from "react";
import { Dropdown } from "react-bootstrap";

const CartDropdown = ({ cartItems, setCartItems }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i className="ri-shopping-cart-line"></i>
        <span className="badge bg-secondary">{cartItems.length}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Dropdown.Item key={item.id}>
              <span>{item.name}</span>
              <span className="float-end">${item.price}.00</span>
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item>No items in cart</Dropdown.Item>
        )}
        <style>
          {`
            .dropdown-toggle::after {
              display: none !important;
            }
          `}
        </style>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CartDropdown;
