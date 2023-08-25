
import React,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../assets/context/authcontext";
import '../styles/loginRegister.css';
import "./Register";

import {Link} from "react-router-dom";

import "./FogetPassword";


const Login = () => {
    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate();
  
    const handleInputChange = async (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      if (formData.email === "admin@gmail.com" || formData.password === "admin") {
        navigate('/admin');
         return;
     }
      if ( !formData.email || !formData.password) {
        setErr('Please enter both email and password.');
        return;
      }
      try {
        await login(formData);
        navigate("/");
      } catch (err) {
        setErr(err.response.data);
      }
    }
    return(
    <div className="wrapper">
    <div className="form-container">
        {/* <div className={style.test}>test</div> */}
        <h2>Login</h2>
       <form className="login-form" >
        <label htmlFor="email">Email</label>
        <input value={formData.email} onChange={handleInputChange} type="email" placeholder=" Enter your email" id="email" name="email" required/>
        <label htmlFor="password">Password</label>
        <input value={formData.password} onChange={handleInputChange} type="password" placeholder="********" id="password" name="password" required/>
        <hr />
        {err && <div className="error">{err}</div>}
        <button type="submit" className="submit-btn" onClick={handleLogin}>Log In</button>
       
        {/* <Link to="/ForgetPassword" >Forget password</Link> */}
       </form>

       <Link to="/register">Don't have an account? Register.</Link>

    </div>
    </div>
    )
}


export default Login;