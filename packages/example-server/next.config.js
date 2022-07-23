/** @type {import('next').NextConfig} */

const withGraphql = require("next-plugin-graphql");
 
const nextConfig = withGraphql({
  reactStrictMode: true,
});

module.exports = nextConfig;
