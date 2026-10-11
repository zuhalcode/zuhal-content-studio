"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../use-auth";
import { LoginFormValues } from "../auth.schema";
import { BrandMark, LoginForm, WorkspacePreview } from "../components";

export default function LoginPage() {
  const router = useRouter();
  const { login, loading, error } = useAuth();

  async function handleLogin(values: LoginFormValues) {
    try {
      console.log("[Login] Submitting credentials");

      const result = await login(values);
      console.log("[Login] API result:", result);

      console.log(
        "[Login] access_token cookie visible to JS:",
        document.cookie.includes("access_token="),
      );

      console.log("[Login] Redirecting to dashboard");
      router.replace("/dashboard/overview");
    } catch (error) {
      console.error("[Login] Failed:", error);
    }
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 lg:grid lg:grid-cols-[45%_55%]">
      {/* Marketing */}
      <section className="relative hidden min-h-screen overflow-hidden bg-[#09090b] px-12 py-11 lg:flex lg:flex-col xl:px-16">
        <div className="relative z-10">
          <BrandMark inverse />
        </div>

        <div className="relative z-10 my-auto max-w-[540px] pb-10 pt-20">
          <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            <span className="size-1.5 rounded-full bg-[#b9a7ff]" />
            The workspace for momentum
          </p>

          <h1 className="max-w-[480px] text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-white xl:text-6xl">
            Your workspace.
            <br />
            <span className="text-[#b9a7ff]">Your momentum.</span>
          </h1>

          <p className="mt-6 max-w-[400px] text-[15px] leading-7 text-zinc-400">
            Orbit brings your team, projects, and priorities together so you can
            focus on doing your best work.
          </p>

          <WorkspacePreview />
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs text-zinc-600">
          <span>© 2024 Orbit, Inc.</span>
          <span>Built for teams that move forward.</span>
        </div>

        <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full border border-white/[0.045]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-[340px] rounded-full border border-[#b9a7ff]/10" />
      </section>

      {/* Authentication */}
      <section className="flex min-h-screen flex-col bg-[#0f0f12] px-6 py-8 sm:px-10 lg:justify-center lg:border-l lg:border-white/[0.06] lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-[410px]">
          <div className="lg:hidden">
            <BrandMark />
          </div>

          <div className="mt-16 lg:mt-0">
            <div className="mb-9">
              <h2 className="text-[30px] font-semibold tracking-[-0.045em] text-white">
                Welcome back
              </h2>

              <p className="mt-2 text-[15px] text-zinc-500">
                Sign in to continue to your workspace.
              </p>
            </div>

            <LoginForm loading={loading} error={error} onSubmit={handleLogin} />

            <p className="mt-8 text-center text-sm text-zinc-500">
              Don&apos;t have an account?{" "}
              <a
                href="#create-account"
                className="font-medium text-zinc-200 underline underline-offset-4 transition hover:text-white"
              >
                Create an account
              </a>
            </p>
          </div>

          <p className="mt-16 text-center text-[11px] leading-5 text-zinc-600 lg:mt-20">
            By continuing, you agree to Orbit&apos;s{" "}
            <a
              href="/terms"
              className="underline underline-offset-2 transition hover:text-zinc-400"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#privacy"
              className="underline underline-offset-2 transition hover:text-zinc-400"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
