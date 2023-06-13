/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_URL: process.env.SERVER_URL
  }, 
  async rewrites() {
    return [
      {
        source: '/auth/login',
        destination: 'http://3.74.233.199:4000/auth/login'
      }
    ]
  }
}

module.exports = nextConfig
