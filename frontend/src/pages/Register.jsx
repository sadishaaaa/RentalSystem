import React, { useState } from "react";
import "../styles/loginRegister.css";
import { Link } from "react-router-dom";
import "./Login";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // import Axios

const Register = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    contact_no: "",
    address: "",
    password: "",
  });
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !formData.customerName ||
      !formData.email ||
      !formData.contact_no ||
      !formData.address ||
      !formData.password
    ) {
      setErr("Please fill in all fields.");
      return;
    }

    // Check if email is valid
    if (!formData.email.includes(".com")) {
      setErr("Invalid email format.");
      return;
    }

    // Check if password is at least 4 characters long
    if (formData.password.length < 4) {
      setErr("Password must be at least 4 characters long.");
      return;
    }

    // Check if phone number is exactly 10 digits
    if (formData.contact_no.length !== 10) {
      setErr("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      navigate("/Login");
    } catch (err) {
      if (err.response.status === 400) {
        setErr(err.response.data);
      } else if (err.response.status === 409) {
        setErr(err.response.data);
      } else {
        setErr("User Registered sucessfully.");
      }
    }
  };

  console.log(err);

  return (
    <div className="wrapper">
      <div className="form-container">
        <h2>Register</h2>
        <form className="register-form">
          <label htmlFor="customerName"> Full name</label>
          <input
            value={formData.customerName}
            onChange={handleInputChange}
            id="customerName"
            placeholder="Full name"
            type="text"
            name="customerName"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder=" Enter your email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="contact_no">Phone Number</label>
          <input
            value={formData.contact_no}
            onChange={handleInputChange}
            type="text"
            placeholder=" Enter your phone number"
            id="contact_no"
            name="contact_no"
            required
          />
          <label htmlFor="address">Address</label>
          <input
            value={formData.address}
            onChange={handleInputChange}
            type="text"
            placeholder=" Enter your address"
            id="address"
            name="address"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button
            type="submit"
            className="submit-btn"
            onClick={handleFormSubmit}
          >
            Register
          </button>
          {err && <div className="error">{err}</div>}
        </form>
        <br /> <br />
        <Link to="/login">Already have an account? Login here.</Link>
        {/* <button className="link-btn" >Already have an account? Login here.</button> */}
      </div>
    </div>
  );
};

export default Register;
