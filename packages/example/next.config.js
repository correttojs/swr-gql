/** @type {import('next').NextConfig} */
const path = require("path");

const withGraphql = require("next-plugin-graphql");

const withTM = require("next-transpile-modules")(["@packages/swr-gql"]);
const nextConfig = withGraphql(withTM({
  reactStrictMode: true,
}));

module.exports = nextConfig;
