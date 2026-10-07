"use client";

import { useCallback, useState } from "react";
import { authService } from "./auth.services";

interface LoginCredentials {
  email: string;
  password: string;
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async ({ email, password }: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await authService.login({
        email,
        password,
      });

      return data;
    } catch (err: any) {
      const message =
        err?.response?.data?.message ??
        "Unable to sign in. Please check your email and password.";

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
