import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
import "./styles/login.css";
import loadingSpinner from "../assets/loadingSpinner.svg";

const Login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style = "background: #5C93FE";
    // remove background color before rendering the next component
    return () => {
      document.body.style = "";
    };
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
      await auth.login(values);

      window.location = "/";
    } catch (ex) {
      if (ex.response) {
        setError(ex.response.data);
      } else {
        setError("Server failed to respond, try again later");
      }
    }

    setLoading(false);
  };

  if (auth.getCurrentUser()) return <Redirect to="/" />;
  return (
    <div className="login">
      {loading && (
        <img
          src={loadingSpinner}
          alt="loading"
          height="40"
          width="40"
          className="loadingSpinner"
        />
      )}
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
