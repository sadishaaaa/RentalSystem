import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaShoppingCart } from "react-icons/fa";
// import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import {
  Badge,
  Button,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  Modal
} from "react-bootstrap";

import { Link, NavLink, useLocation } from "react-router-dom";
import CartDropdown from "../cartDropdown";


import "../../styles/header.css";
import Listing from "../../pages/Listing";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/products",
    display: "Rent",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/package",
    display: "Packages",
  },
  {
    path: "/Return",
    display: "Return",
  },
  {
    path: "/contact",
    display: "Contact",
  },

];

const Header = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogoutModalClose = () => setShowLogoutModal(false);
  const handleLogoutModalShow = () => setShowLogoutModal(true);

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const handleLogout = () => {
    handleLogoutModalClose();
    localStorage.clear();
    window.location.href = "/login";
  };
  const [userData, setUserData] = useState(null); // State to hold user data

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/getUser");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      }
    };
    fetchUserData();
  }, []);

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="logo">
              BHADA <span className="orange">KUDA </span>
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav-user">
              <Link to="/cart" className=" d-flex gap-1">
                <FaShoppingCart size={20} />
                {/* <Badge>{cartItems.length}</Badge> */}
              </Link>

              <Link to="/userprofile" className=" d-flex  gap-1">
                <i class="ri-user-line" onClick={handleLogoutModalShow}></i>
              </Link>
            </div>

            
          </div>
        </Container>
      </div>

           
</header>
);
};

export default Header;