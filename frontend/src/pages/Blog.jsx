
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'antd'; // Import Ant Design components
import axios from 'axios';
import '../styles/Blogs.css';

const { Meta } = Card; // Destructure Meta from Card

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/blog/getBlog')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleLearnMore = (blogId) => {
    setBlogPosts(prevBlogPosts =>
      prevBlogPosts.map(blog => {
        if (blog.blogId === blogId) {
          return { ...blog, expanded: !blog.expanded };
        }
        return blog;
      })
    );
  };

  return (
    <div className="blog-container">
      <Row gutter={[16, 16]}>
        {blogPosts.map((blogPost, index) => (
          <Col key={blogPost.blogId} lg={8} md={12} xs={24}>
            <Card
              hoverable
              cover={
                <div className="card-image-container">
                  {blogPost.blogPicture && (
                    <img
                      className="blog-image"
                      alt={blogPost.blogTitle}
                      src={blogPost.blogPicture}
                    />
                  )}
                </div>
              }
              onClick={() => handleLearnMore(blogPost.blogId)} // Make the whole card clickable
            >
              <Meta title={blogPost.blogTitle} description={
                blogPost.expanded
                  ? blogPost.blogDesc
                  : blogPost.blogDesc.slice(0, 100)
              } />
              <Button className="learn-more-button">
                {blogPost.expanded ? 'Read Less' : 'Read More'}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Blog;