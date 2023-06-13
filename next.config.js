/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_URL: process.env.SERVER_URL
  }, 
  async rewrites() {
    return [
      {
        source: '/api/auth/:slug*',
        destination: 'http://3.74.233.199:4000/auth/:slug*'
      },
      {
        source: '/api/auth/:slug*',
        destination: 'http://3.74.233.199:4000/auth'
      }

    ]
  }
}

module.exports = nextConfig
