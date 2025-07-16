/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

module.exports = {
  async redirects() {
    return [
      {
        source: '/bleh/',
        destination: 'https://bleh.katelyn.moe',
        permanent: true,
      },
      {
        source: '/bleh/fm/',
        destination: 'https://bleh.katelyn.moe',
        permanent: true,
      }
    ];
  },
};

/** @type {import("next").NextConfig} */
const config = {};

export default config;
