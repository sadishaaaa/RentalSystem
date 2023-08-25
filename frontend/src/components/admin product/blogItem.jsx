import React, { useState } from "react";
import { Col } from "reactstrap";
import "../../styles/item.css";

const BlogItem = (props) => {
  const { blogPicture, blogTitle, blogDesc } = props.item;


  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="item">
        <div className="product__img">
          <img src={blogPicture} alt="" className="w-100" />
        </div>

        <div className="item-content mt-4">
          <h4 className="section__title text-center">{blogTitle}</h4>
          {/* <h6 className="rent__price text-center mt-">
            NRs. {}.00 <span>/ Week Rental Price</span>
          </h6> */}
          <h6 className="rent__price text-center mt-">
             {blogDesc}
          </h6>

          {/* {!addedToCart ? (
            <div className="text-center">
              <button className="w-50 item-btn btn-details" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          ) : (
            <p className="text-success">Item added to cart!</p>
          )} */}
        </div>
      </div>
    </Col>
  );
};

export default BlogItem;
