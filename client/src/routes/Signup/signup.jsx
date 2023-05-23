import { useState } from "react";
import axios from "axios";
import "./sign.css";

const Signup = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/signup", formData);
      location.href = "/";
    } catch (err) {
      setError(err);
    }
  };

  if (error) return `Error: ${error.message}`;

  return (
    <div className="container">
      <div className="login-box">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="username..."
            />
            <label>Username</label>
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email..."
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password..."
            />
            <label>Password</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="confirmPassword..."
            />
            <label>Confirm password</label>
          </div>
          <button className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
