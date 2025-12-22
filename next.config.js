/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports for easy hosting
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
