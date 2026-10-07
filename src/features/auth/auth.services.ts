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
};
