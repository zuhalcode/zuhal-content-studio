const env = {
  // Use relative "/api" in the browser so requests are routed through Next.js rewrites,
  // attaching HTTP-only authentication cookies to the frontend origin.
  API_URL:
    typeof window !== "undefined"
      ? "/api"
      : (process.env.NEXT_PUBLIC_API_URL as string) || "http://localhost:3001/api",
};

export default env;
