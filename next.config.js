/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SERVER_URL: process.env.SERVER_URL
  }, 
  async rewrites() {
    return [
      {
        source: '/auth/:slug*',
        destination: 'http://3.74.233.199:4000/auth/:slug*'
      },
      {
        source: '/courses/:slug*',
        destination: 'http://3.74.233.199:4000/courses/:slug*'
      },
      {
        source: '/exercises/:slug*',
        destination: 'http://3.74.233.199:4000/exercises/:slug*'
      }
    ]
  }
}

module.exports = nextConfig
