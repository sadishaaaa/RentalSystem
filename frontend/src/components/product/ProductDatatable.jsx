import { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
const ProductDatatable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    product_name: "",
    product_type: "",
    actual_price: "",
    rental_price: "",
    cover: "",
  });
  const [image, setImage] = useState();

  const [formErrors, setFormErrors] = useState({
    product_name: "",
    product_type: "",
    actual_price: "",
    rental_price: "",
    cover: "",
  });
  useEffect(() => {
    fetchProductData();
  }, []);
  const handleDelete = async (product_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/product/delProduct/${product_id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      setData(data.filter((item) => item.product_id !== product_id));
      message.success("product deleted successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to delete product");
    }
  };

  const fetchProductData = () => {
    axios
      .get("http://localhost:5000/api/product/getProduct")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actionColumn = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 200,
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => handleDelete(record.product_id)}
          danger
        >
          Delete
        </Button>
      ),
    },
  ];

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
        setNewProduct({ ...newProduct, cover: response.data.secure_url });
      })
      .catch((error) => {
        console.error(error);
      });
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      cover: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  console.log(newProduct);
  const handleSubmit = () => {
    const errors = {};
    if (!newProduct.product_name) {
      errors.product_name = "Product name is required";
    }
    if (!newProduct.product_type) {
      errors.product_type = "Product type is required";
    }
    if (!newProduct.actual_price) {
      errors.actual_price = "Actual price is required";
    }
    if (!newProduct.rental_price) {
      errors.rental_price = "Rental price is required";
    }
    if (!newProduct.cover) {
      errors.cover = "Cover photo is required";
    }

    // Check file type for cover photo
    if (newProduct.cover && !newProduct.cover.match(/\.(jpg|jpeg|png)$/i)) {
      errors.cover = "Cover photo must be a JPG or PNG image";
    }

    // Update form errors
    setFormErrors(errors);

    // If there are errors, do not proceed with submission
    if (Object.keys(errors).length > 0) {
      return;
    }

    axios
      .post("http://localhost:5000/api/product/product", newProduct)
      .then((response) => {
        setNewProduct({
          product_name: "",
          product_type: "",
          actual_price: "",
          rental_price: "",
          cover: "",
        });

        message.success("Product added successfully");

        // Close the modal
        toggleModal();

        fetchProductData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Type",
      dataIndex: "product_type",
      key: "product_type",
    },
    {
      title: "Actual Price",
      dataIndex: "actual_price",
      key: "actual_price",
    },
    {
      title: "Rental Price",
      dataIndex: "rental_price",
      key: "rental_price",
    },
    {
      title: "Cover Photo",
      dataIndex: "cover",
      key: "cover",
      render: (cover) => <img src={cover} alt="Cover" style={{ width: 50 }} />,
    },
    ...actionColumn,
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Button onClick={toggleModal}>+ Add New Product</Button>
      </div>

      <Modal
        visible={showModal}
        onCancel={toggleModal}
        onOk={handleSubmit}
        title="Add New Product"
      >
        <Form>
          <Form.Item
            label="Name"
            validateStatus={formErrors.product_name ? "error" : ""}
            help={formErrors.product_name}
          >
            <Input
              type="text"
              name="product_name"
              value={newProduct.product_name}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Type"
            validateStatus={formErrors.product_type ? "error" : ""}
            help={formErrors.product_type}
          >
            <Input
              type="text"
              name="product_type"
              value={newProduct.product_type}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Actual Price"
            validateStatus={formErrors.actual_price ? "error" : ""}
            help={formErrors.actual_price}
          >
            <Input
              type="text"
              name="actual_price"
              value={newProduct.actual_price}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Rental Price"
            validateStatus={formErrors.rental_price ? "error" : ""}
            help={formErrors.rental_price}
          >
            <Input
              type="text"
              name="rental_price"
              value={newProduct.rental_price}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            label="Cover Photo"
            validateStatus={formErrors.cover ? "error" : ""}
            help={formErrors.cover}
          >
            <Input
              type="file"
              accept="image/*"
              name="coverPhoto"
              onChange={handleImageUpload}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ProductDatatable;
