import axios from "axios";

export function auth(user) {
  return axios.post("http://localhost:5000/api/auth", user);
}
