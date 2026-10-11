/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const rawApiUrl =
      process.env.INTERNAL_API_URL ||
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      "http://localhost:3001/api";

    const baseApiUrl = rawApiUrl.replace(/\/api\/?$/, "");

    return [
      {
        source: "/api/:path*",
        destination: `${baseApiUrl}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
