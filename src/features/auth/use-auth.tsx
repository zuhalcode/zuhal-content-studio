"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { authService } from "./auth.services";

interface LoginCredentials {
  email: string;
  password: string;
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      return await authService.login(credentials);
    } catch (err: unknown) {
      const message = axios.isAxiosError<{ message?: string }>(err)
        ? (err.response?.data?.message ??
          "Unable to sign in. Please check your email and password.")
        : "An unexpected error occurred. Please try again.";

      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    login,
    loading,
    error,
  };
}
