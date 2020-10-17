import React, { useEffect, useState } from "react";
import { auth } from "../services/authService";
import "./styles/login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

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
    console.log(values);

    try {
      setError("");
      const jwt = await auth(values);
      console.log(jwt);
    } catch (ex) {
      if (ex.response) {
        setError(ex.response.data);
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="loginLabel" className="loginLabel">
          Login
        </label>
        <label htmlFor="email" className="emailLabel">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="emailInput"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="password" className="passwordLabel">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="passwordInput"
          value={values.password}
          onChange={handleChange}
        />
        <input type="submit" className="submitButton" />

        <label htmlFor="errorMessage" className="errorMessage">
          {error}
        </label>
      </form>
    </div>
  );
};

export default Login;
