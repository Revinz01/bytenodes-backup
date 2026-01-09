/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
        "images.unsplash.com",
        "www.proxmox.com",
        "assets.ubuntu.com",
        "upload.wikimedia.org",
        "www.cloudflare.com",
    ],
    remotePatterns: [
      new URL('https://images.unsplash.com/**'),
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
