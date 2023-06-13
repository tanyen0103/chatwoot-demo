/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www-internal-blog.chatwoot.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.chatwoot.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
