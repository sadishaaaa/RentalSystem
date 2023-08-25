import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/utensil-img/gl1.jpeg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Kitchen-ware rental service</h2>
              <p className="section__description">
              Welcome to our kitchen-ware rental system! We are a team of passionate individuals who believe that cooking should be accessible and affordable for everyone, no matter their circumstances.

Our mission is to provide high-quality kitchen-ware rental services to individuals and businesses alike. We understand that not everyone has the means to purchase expensive cookware and kitchen appliances, or may only need them for a short period of time. That's why we offer flexible rental options that cater to your unique needs.

We are committed to providing our customers with the best possible experience. 
              </p>
{/* 
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div> */}
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
