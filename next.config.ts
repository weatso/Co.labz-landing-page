import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ini adalah bagian untuk memberi izin pada gambar dari luar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Mengizinkan gambar dari picsum
      },
    ],
  },
};

export default nextConfig;