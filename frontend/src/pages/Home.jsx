import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutSection from "../components/UI/AboutSection";

import Cover from "../assets/all-images/cover.jpg"
import Item from "../components/UI/Item";



import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section "  style={{marginTop: '10rem'}}>
        {/* <HeroSlider /> */}
        <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h1>Welcome to our Kitchenware Rental System</h1>
          <p>Looking to upgrade your cooking experience without breaking the bank? You've come to the right place! Our rental system offers a wide variety of high-quality kitchenware and appliances for all your cooking needs.</p>
          <p>Whether you're a professional chef or a novice home cook, our rental system has everything you need to make your culinary dreams a reality.</p>
        </div>
        <div className="col-sm-6">
          <img src={Cover} alt="" srcset=""   />
        </div>
        
        {/* <div className="col-sm-6">
          <img src={a} alt="Kitchenware" />
        </div> */}
      </div>
      <Button variant="primary" style={{ backgroundColor: 'orange' }}>
  <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>Rent Now</Link>
</Button>
    </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
     

      {/* =============== blog section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">BLOGS</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Home;
