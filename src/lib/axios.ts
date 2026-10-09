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
    const token = "";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(
      `[API REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
      {
        params: config.params,
        hasBearerToken: Boolean(token),
        timeout: config.timeout,
      },
    );

    return config;
  },
  (error) => {
    console.error("[API REQUEST ERROR]", error.message);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  async (response) => {
    console.log(
      `[API RESPONSE] ${response.status} ${response.config.method?.toUpperCase()} ${response.config.baseURL}${response.config.url}`,
      response.data,
    );

    return response;
  },
  (error) => {
    console.error("[API ERROR]", {
      method: error.config?.method?.toUpperCase(),
      endpoint: `${error.config?.baseURL ?? ""}${error.config?.url ?? ""}`,
      status: error.response?.status,
      message: error.message,
      response: error.response?.data,
    });

    return Promise.reject(error);
  },
);

export default api;
