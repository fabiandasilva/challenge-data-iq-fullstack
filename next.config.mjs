/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "mdbcdn.b-cdn.net" }],
  },
};

export default nextConfig;
