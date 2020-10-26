import axios from "axios";
import jwtDecode from "jwt-decode";
// todo - use more secure method
async function login(user) {
  const { data: jwtToken } = await axios.post(
    "http://localhost:5000/api/auth",
    user
  );
  localStorage.setItem("token", jwtToken);
}

function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

function logout() {
  localStorage.removeItem("token");
}

export default {
  login,
  getCurrentUser,
  logout,
};
