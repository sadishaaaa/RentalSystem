import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/utensil-img/teaware.png";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe and Hygienic Cookwares
                </h2>

                <p className="section__description">
                Our team is dedicated to ensuring that our kitchen-ware is always in top condition, and we strive to offer the latest and greatest products on the market. We also offer helpful tips and tricks for using our equipment, as well as recipes and cooking guides to help you get the most out of your rental.

At our kitchen-ware rental system, we pride ourselves on our commitment to sustainability. By renting our equipment, you're not only saving money, but you're also contributing to reducing waste and preserving the environment. We believe that everyone has a responsibility to do their part in protecting our planet, and we are proud to be a part of that effort.

We understand that cooking can be challenging, especially for those who are new to it. 
                </p>

                <p className="section__description">
                That's why we're here to help! Our team is always available to answer any questions you may have, and we're happy to offer advice and guidance to make your cooking experience as enjoyable and stress-free as possible.

Thank you for choosing our kitchen-ware rental system. We look forward to serving you and helping you discover your inner chef!
                </p>

               
              </div>
            </Col>
          </Row>
        </Container>
      </section>

  
    </Helmet>
  );
};

export default About;
