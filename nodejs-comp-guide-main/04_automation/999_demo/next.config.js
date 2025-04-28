/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
    domains: ["images.microcms-assets.io"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
