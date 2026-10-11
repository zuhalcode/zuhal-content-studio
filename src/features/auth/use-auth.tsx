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

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      await authService.logout();
    } catch (err: unknown) {
      const message = axios.isAxiosError<{ message?: string }>(err)
        ? (err.response?.data?.message ?? "Unable to log out.")
        : "An unexpected error occurred. Please try again.";

      setError(message);
    } finally {
      document.cookie =
        "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie =
        "refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      setLoading(false);
      window.location.href = "/login";
    }
  }, []);

  return {
    login,
    logout,
    loading,
    error,
  };
}
