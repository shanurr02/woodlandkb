/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  distDir: 'docs',  // GitHub Pages uses this folder by default
  images: {
    unoptimized: true, // if you're using <Image />
  },
  // basePath: '/your-repo-name', // optional, required if not root domain
};

module.exports = nextConfig;
