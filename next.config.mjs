/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "mdbcdn.b-cdn.net" },
      { hostname: "randomuser.me" },
    ],
  },
  babel: {
    presets: ["next/babel", "@babel/preset-react"], // Agrega '@babel/preset-react' a los presets
    plugins: ["@babel/plugin-syntax-jsx"], // Opcionalmente, agrega '@babel/plugin-syntax-jsx' a los plugins
  },
};

export default nextConfig;
