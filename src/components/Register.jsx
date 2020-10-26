import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
import { register } from "../services/userService";
import "./styles/register.css";
import loadingSpinner from "../assets/loadingSpinner.svg";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style = "background: #5C93FE";
  }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register(values);
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setError(ex.response.data);
      } else {
        setError("Server failed to respond, try again later");
      }
    }

    setLoading(false);
  };

  if (auth.getCurrentUser()) return <Redirect to="/" />;
  return (
    <div className="registerCard">
      {loading && (
        <img
          src={loadingSpinner}
          alt="loading"
          height="40"
          width="40"
          className="loadingSpinner2"
        />
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="registerLabel" className="registerLabel">
          Register
        </label>
        <label htmlFor="name" className="nameLabel2">
          Name
        </label>
        <input
          type="name"
          name="name"
          className="nameInput2"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="email" className="emailLabel2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="emailInput2"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="password" className="passwordLabel2">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="passwordInput2"
          value={values.password}
          onChange={handleChange}
        />

        <div className="student">
          <input
            type="radio"
            name="role"
            value="student"
            id="student"
            checked={values.role === "student"}
            onChange={handleChange}
          />
          <label htmlFor="student" className="labelStyle">
            Student
          </label>
        </div>
        <div className="teacher">
          <input
            type="radio"
            name="role"
            value="teacher"
            id="teacher"
            checked={values.role === "teacher"}
            onChange={handleChange}
          />
          <label htmlFor="teacher" className="labelStyle">
            Teacher
          </label>
        </div>

        <input type="submit" className="submitButton2" />

        <label htmlFor="errorMessageReg" className="errorMessageReg">
          {error}
        </label>
      </form>
    </div>
  );
};

export default Register;
