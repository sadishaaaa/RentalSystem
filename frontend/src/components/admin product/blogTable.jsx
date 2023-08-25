import { useState, useEffect } from "react";
import { Card, Button, Modal, Form, Input, message } from "antd";
import axios from "axios";
import "./blogTable.css"

const BlogDatatable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newBlog, setnewBlog] = useState({
    blogTitle: "",
    blogDesc: "",
    blogPicture: "",
  });
  const [image, setImage] = useState();

  const [formErrors, setFormErrors] = useState({
    blogTitle: "",
    blogDesc: "",
    blogPicture: "",
  });

  useEffect(() => {
    fetchBlogData();
  }, []);

  const handleDeleteBlog = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/delBlog/${blogId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      setData(data.filter((item) => item.contact_id !== blogId));
      message.success("Blog deleted successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to delete Blog");
    }
  };


  const fetchBlogData = () => {
    axios
      .get("http://localhost:5000/api/blog/getBlog")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const toggleModal = () => {
    setShowModal(!showModal);
  };
  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formImage = new FormData();
    formImage.append("file", file);
    formImage.append("upload_preset", "Images");
    formImage.append("cloud_name", "daxihhqqp");
  
    axios
      .post("https://api.cloudinary.com/v1_1/daxihhqqp/image/upload", formImage)
      .then((response) => {
        setImage(response.data.public_id);
        setnewBlog({ ...newBlog, blogPicture: response.data.secure_url });
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          blogPicture: "",
        }));
      })
      .catch((error) => {
        console.error(error);
        // Handle the error, show a message to the user, etc.
      });
  };
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };
console.log(newBlog)
  const handleSubmit = () => {
    const errors = {};
    if (!newBlog.blogTitle) {
      errors.blogTitle = "Blog title is required";
    }
    if (!newBlog.blogDesc) {
      errors.blogDesc = "Blog description is required";
    }
    if (!newBlog.blogPicture) {
      errors.blogPicture = "Blog picture is required";
    } else if (!newBlog.blogPicture.match(/\.(jpg|jpeg|png)$/i)) {
      errors.blogPicture = "Blog picture must be a JPG or PNG image";
    }

    // Update form errors
    setFormErrors(errors);

    // If there are errors, do not proceed with submission
    if (Object.keys(errors).length > 0) {
      return;
    }
    axios
      .post("http://localhost:5000/api/blog/blog", newBlog)
      .then((response) => {
        setnewBlog({
          blogTitle: "",
          blogDesc: "",
          blogPicture: "",
        });
        toggleModal();
        fetchBlogData();
        message.success("Blog successfully added!"); 
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Button onClick={toggleModal}>+ Add Blog</Button>
      </div>

      <Modal
        visible={showModal}
        onCancel={toggleModal}
        onOk={handleSubmit}
        title="Add Blog"
      >

        <Form>
          <Form.Item
            label="Title"
            validateStatus={formErrors.blogTitle ? "error" : ""}
            help={formErrors.blogTitle}
          >
            <Input
              type="text"
              name="blogTitle"
              value={newBlog.blogTitle}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Description"
            validateStatus={formErrors.blogDesc ? "error" : ""}
            help={formErrors.blogDesc}
          >
            <Input
              type="textarea"
              name="blogDesc"
              value={newBlog.blogDesc}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Picture"
            validateStatus={formErrors.blogPicture ? "error" : ""}
            help={formErrors.blogPicture}
          >
            <Input
              type="file"
              accept=".jpg, .jpeg, .png"
              name="blogPicture"
              onChange={handleImageUpload}
            />
          </Form.Item>
        </Form>
      </Modal>

      <div className="card-container">
        {data.map((blog) => (
          <Card key={blog.blogId} className="blog-card">
            <img src={blog.blogPicture} alt="Blog" className="blog-image" />
            <div className="blog-content">
              <h3>{blog.blogTitle}</h3>
              <p>{blog.blogDesc}</p>
              <div className="button-container">
              <Button className="deleteButton"  onClick={() => handleDeleteBlog(blog.blogId)}>
            Delete
          </Button>
                <Button type="primary">Learn More</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogDatatable;
