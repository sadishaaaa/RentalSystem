import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Item from "../components/UI/Item";
import axios from "axios";
import "../styles/Listing.css";

const Listing = () => {
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    // load cart items from local storage on mount
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);

    // fetch product items from API
    fetchProductItems();
  }, []);

  useEffect(() => {
    // save cart items to local storage whenever cartItems state changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchProductItems = () => {
    axios
      .get("http://localhost:5000/api/product/getProduct")
      .then((response) => {
        setProductItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddToCart = (itemToAdd) => {
    const newCartItem = {
      id: itemToAdd.id,
      name: itemToAdd.product_name,
      price: itemToAdd.rental_price,
      quantity: 1,
      image: itemToAdd.cover,
    };
    setCartItems([...cartItems, newCartItem]);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedData = productItems.filter((item) =>
    item.product_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortBy === "low") {
    sortedData.sort((a, b) => a.rental_price - b.rental_price);
  } else if (sortBy === "high") {
    sortedData.sort((a, b) => b.rental_price - a.rental_price);
  }

  return (
    <Helmet title="Rent">
      <CommonSection title="Explore Our Rentals" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="rental d-flex align-items-center gap-3 mb-5">
                <div className="d-flex align-items-center gap-2">
                  <span className="d-flex align-items-center gap-2">
                    <i className="ri-sort-asc"></i> Sort By
                  </span>

                  <select value={sortBy} onChange={handleSort}>
                    <option value="">Sort By</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                  </select>
                </div>

                <div className="search__box d-flex">
                  <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </Col>
            {sortedData.map((item) => (
              <Item item={item} key={item.id} handleAddToCart={handleAddToCart} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Listing;
