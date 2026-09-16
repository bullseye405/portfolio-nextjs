/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'reactnative.dev' },
      { protocol: 'https', hostname: 'redux.js.org' },
      { protocol: 'https', hostname: 'graphql.org' },
      { protocol: 'https', hostname: 'jestjs.io' },
      { protocol: 'https', hostname: 'laravel.com' },
      { protocol: 'https', hostname: 'www.mysql.com' },
      { protocol: 'https', hostname: 'www.postgresql.org' },
      { protocol: 'https', hostname: 'openlayers.org' },
      { protocol: 'https', hostname: 'leafletjs.com' },
    ],
  },
};

module.exports = nextConfig;
