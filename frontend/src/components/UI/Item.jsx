import React, { useState } from "react";
import { Col } from "reactstrap";
import "../../styles/item.css";

const Item = (props) => {
  const { cover, product_name, actual_price, rental_price } = props.item;
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    props.handleAddToCart(props.item);
    setAddedToCart(true);
  };

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="item">
        <div className="product__img">
          <img src={cover} alt="" className="w-100" />
        </div>

        <div className="item-content mt-4">
          <h4 className="section__title text-center">{product_name}</h4>
          <h6 className="rent__price text-center mt-">
            NRs. {rental_price}.00 <span>/ Week Rental Price</span>
          </h6>
          <h6 className="rent__price text-center mt-">
            NRs. {actual_price}.00 <span>/ Week Actual Price</span>
          </h6>

          {!addedToCart ? (
            <div className="text-center">
              <button className="w-50 item-btn btn-details" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          ) : (
            <p className="text-success">Item added to cart!</p>
          )}
        </div>
      </div>
    </Col>
  );
};

export default Item;
