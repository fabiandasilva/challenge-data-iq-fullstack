/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "mdbcdn.b-cdn.net" },
      { hostname: "randomuser.me" },
    ],
  },
};

export default nextConfig;
