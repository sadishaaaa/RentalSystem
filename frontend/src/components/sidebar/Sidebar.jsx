import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Button,Modal } from "reactstrap";
import { Link } from "react-router-dom";

import { useContext } from "react";

const Sidebar = () => {
 
  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Bhada kuda</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/addproduct" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/addblog" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Blogs</span>
            </li>
          </Link>
          <Link to="/rentList" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/packages" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Packages</span>
            </li>
          </Link>
          <Link to="/contactList" style={{ textDecoration: "none" }}>
            <li>
              <ConnectWithoutContactIcon className="icon" />
              <span>Contact</span>
            </li>
          </Link>
        
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
