/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/woodlandkb',       // Required for GitHub Pages
  images: {
    unoptimized: true            // Required if you're using next/image
  }
};

module.exports = nextConfig;
