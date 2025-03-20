/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/app",
        destination: "https://app.thefalse.net",
        permanent: true,
      },
      {
        source: "/app/:path*",
        destination: "https://app.thefalse.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
