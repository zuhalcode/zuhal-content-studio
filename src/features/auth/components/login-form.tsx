"use client";

import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "../auth.schema";

interface LoginFormProps {
  loading: boolean;
  error: string | null;
  onSubmit: (values: LoginFormValues) => Promise<void>;
}

export function LoginForm({ loading, error, onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[13px] font-medium text-zinc-300"
          htmlFor="email"
        >
          Email address
        </label>

        <div className="relative">
          <Mail
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-[17px] -translate-y-1/2 text-zinc-600"
          />

          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className="h-12 w-full rounded-lg border border-white/[0.09] bg-[#18181b] pl-11 pr-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-white/[0.14] focus:border-[#b9a7ff]/60 focus:ring-4 focus:ring-[#b9a7ff]/10"
          />
        </div>

        {errors.email && (
          <p className="text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            className="text-[13px] font-medium text-zinc-300"
            htmlFor="password"
          >
            Password
          </label>

          <a
            className="text-xs font-medium text-zinc-500 underline-offset-4 transition hover:text-zinc-200 hover:underline"
            href="#forgot-password"
          >
            Forgot password?
          </a>
        </div>

        <div className="relative">
          <LockKeyhole
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 size-[17px] -translate-y-1/2 text-zinc-600"
          />

          <input
            {...register("password")}
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Enter your password"
            aria-invalid={!!errors.password}
            className="h-12 w-full rounded-lg border border-white/[0.09] bg-[#18181b] pl-11 pr-12 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-white/[0.14] focus:border-[#b9a7ff]/60 focus:ring-4 focus:ring-[#b9a7ff]/10"
          />

          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((value) => !value)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-600 transition hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9a7ff]/50"
          >
            {showPassword ? (
              <EyeOff aria-hidden="true" className="size-[17px]" />
            ) : (
              <Eye aria-hidden="true" className="size-[17px]" />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="text-xs text-red-400">{errors.password.message}</p>
        )}
      </div>

      {/* Remember */}
      <label className="flex items-center gap-2 text-[13px] text-zinc-500">
        <input
          type="checkbox"
          className="size-4 rounded border-white/10 bg-zinc-900 accent-[#b9a7ff]"
        />
        Remember me
      </label>

      {/* API error */}
      {error && (
        <p
          role="alert"
          className="rounded-lg border border-red-500/20 bg-red-500/[0.07] px-3.5 py-3 text-xs leading-5 text-red-400"
        >
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="group mt-1 flex h-12 items-center justify-center gap-2 rounded-lg bg-white text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/15 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Signing in…" : "Sign in"}

        {!loading && (
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        )}
      </button>
    </form>
  );
}
