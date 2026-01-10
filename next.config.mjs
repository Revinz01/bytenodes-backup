/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
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
      new URL('https://www.proxmox.com/**'),
      new URL('https://assets.ubuntu.com/**'),
      new URL('https://upload.wikimedia.org/**'),
      new URL('https://www.cloudflare.com/**'),
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
