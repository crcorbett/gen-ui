/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];
    return config;
  },
};

export default nextConfig;
