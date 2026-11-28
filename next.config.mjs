/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      new URL("https://api-nightclub-sz9j.onrender.com/file-bucket/**"),
    ],
  },
};

export default nextConfig;
