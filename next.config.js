const withPWA = require('next-pwa');
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, 
    pwa: {
      customWorkerDir: 'serviceworker',
    }
  }
  
module.exports = withPWA(nextConfig)