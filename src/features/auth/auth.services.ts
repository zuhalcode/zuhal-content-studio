import api from "@/lib/axios";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  data: {
    accessToken?: string;
    user: {
      id: string;
      email: string;
      name?: string;
    };
  };
}

export const authService = {
  async login(payload: LoginPayload) {
    const response = await api.post<LoginResponse>("/auth/login", payload);

    return response.data;
  },

  async logout() {
    const response = await api.post<{ message: string }>("/auth/logout");

    return response.data;
  },

  async me() {
    const response = await api.get<{
      data: {
        id: string;
        email: string;
      };
    }>("/auth/me");

    return response.data;
  },
};
