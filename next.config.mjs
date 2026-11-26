/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-nightclub-sz9j.onrender.com",
        pathname: "/file-bucket/**",
      },
    ],
  },
};

export default nextConfig;
