import axios from "axios";

export function register(user) {
  return axios.post("http://localhost:5000/api/users", user);
}
