/** @type {import('next').NextConfig} */
const path = require("path");
const withTM = require("next-transpile-modules")(["@packages/swr-gql"]);
const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig;
