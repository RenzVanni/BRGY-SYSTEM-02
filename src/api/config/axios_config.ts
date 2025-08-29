import axios from "axios";

const baseUrl = process.env.BACKEND_DEV_URL;

export const instance = axios.create({
  baseURL: baseUrl,
  // withCredentials: true,
});
