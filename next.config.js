/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
