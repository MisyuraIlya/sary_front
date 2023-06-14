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
        destination: `http://${process.env.SERVER_URL}/auth/:slug*`
      },
      {
        source: '/courses/:slug*',
        destination: `http://${process.env.SERVER_URL}/courses/:slug*`
      },
      {
        source: '/exercises/:slug*',
        destination: `http://${process.env.SERVER_URL}/exercises/:slug*`
      }
    ]
  }
}

module.exports = nextConfig
