import axios from "axios";
const BaseURL= import.meta.env.VITE_BASE_URL;

export default axios.create({
  baseURL: `${conf.baseUrl}`,
});

export const axiosPrivate = axios.create({
  baseURL: `${conf.baseUrl}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});