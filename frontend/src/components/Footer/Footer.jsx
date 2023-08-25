import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },


  {
    path: "/cars",
    display: "Rent",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/packages",
    display: "Packages",
  },
  
  {
    path: "/PrivacyPolicy",
    display: "Privacy Policy",
  },
  
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              {/* <h1> */}
                {/* <Link to="/home" className=" d-flex align-items-center gap-2"> */}
                  {/* <i class="ri-car-line"></i> */}
                  <div className="logo">BHADA <span className="orange">KUDA </span></div>
                {/* </Link> */}
              {/* </h1> */}
            </div>
            <p className="footer__logo-content">
            Looking to upgrade your cooking experience without breaking the bank? You've come to the right place! Our rental system offers a wide variety of high-quality kitchenware and appliances for all your cooking needs.


            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">7 Tarkeshwor,Nepal</p>
              <p className="office__info">Phone: +977 9869029494</p>

              <p className="office__info">Email: Feedback@bhadakuda.com</p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year},
                 All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
