import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useEffect, useState } from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
const Widget = ({ type, count }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: (
          <Link to="/users" className="link">
            View all users
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: (
          <Link to="/users" className="link">
            View all users
          </Link>
        ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: (
          <Link to="/rentList" className="link">
            View all orders
          </Link>
        ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        {data.icon}
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {count}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
