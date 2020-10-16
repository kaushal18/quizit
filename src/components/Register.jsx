import React, { useEffect } from "react";
import "./register.css";

const Register = () => {
  useEffect(() => {
    document.body.style = "background: #5C93FE";
  }, []);

  return (
    <div className="registerCard">
      <form>
        <label htmlFor="registerLabel" className="registerLabel">
          Register
        </label>
        <label htmlFor="name" className="nameLabel2">
          Name
        </label>
        <input type="name" className="nameInput2" />
        <label htmlFor="email" className="emailLabel2">
          Email
        </label>
        <input type="email" className="emailInput2" />
        <label htmlFor="password" className="passwordLabel2">
          Password
        </label>
        <input type="password" className="passwordInput2" />

        <div className="student">
          <input type="radio" value="student" name="role" id="student" />
          <label htmlFor="student" className="labelStyle">
            Student
          </label>
        </div>
        <div className="teacher">
          <input type="radio" value="teacher" name="role" id="teacher" />
          <label htmlFor="teacher" className="labelStyle">
            Teacher
          </label>
        </div>

        <input type="submit" className="submitButton2" />
      </form>
    </div>
  );
};

export default Register;
