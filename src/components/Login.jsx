import React, { useEffect } from "react";
import "./login.css";

const Login = () => {
  useEffect(() => {
    document.body.style = "background: #5C93FE";
  }, []);

  return (
    <div className="login">
      <form>
        <label htmlFor="loginLabel" className="loginLabel">
          Login
        </label>
        <label htmlFor="email" className="emailLabel">
          Email
        </label>
        <input type="email" className="emailInput" />
        <label htmlFor="password" className="passwordLabel">
          Password
        </label>
        <input type="password" className="passwordInput" />
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
};

export default Login;
