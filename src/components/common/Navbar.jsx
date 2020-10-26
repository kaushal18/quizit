import React from "react";
import auth from "../../services/authService";
import "../styles/navbar.css";

const Navbar = ({ user }) => {
  const handleLogout = () => {
    auth.logout();
    window.location = "/login";
  };

  return (
    <nav>
      <ul>
        <li>{user.name.toUpperCase()}</li>
        <li
          style={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={handleLogout}
        >
          LOGOUT
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
