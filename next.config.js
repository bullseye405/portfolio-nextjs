/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname:
          'upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'www.upwork.com',
      },
    ],
  },
};

module.exports = nextConfig;
