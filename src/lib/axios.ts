import env from "@/config/env";
import axios from "axios";

const API_TIMEOUT = 60_000;
const headers = {
  "Content-Type": "application/json",
};

const api = axios.create({
  baseURL: env.API_URL,
  timeout: 60 * 1000,
  withCredentials: true,
  headers,
});

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    console.error("[API REQUEST ERROR]", error.message);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;

    // When an API call fails with 401 (invalid/expired session),
    // redirect to /login if the user is currently on a protected route.
    if (status === 401 && typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (!currentPath.startsWith("/login")) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
