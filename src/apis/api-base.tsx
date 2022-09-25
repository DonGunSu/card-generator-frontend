import axios from "axios";

const api = axios.create({
  baseURL: "https://kauth.kakao.com",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
});

export default api;