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
  basePath: "/next-js-pages",
  assetPrefix: "/nextjs-pages"

}

module.exports = nextConfig
