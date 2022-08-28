/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  swcMinify: true,
  images:{
     loader: "akamai",
     path: ""
   },
   basePath: "/.",
   assetPrefix: "/."

}

module.exports = nextConfig
