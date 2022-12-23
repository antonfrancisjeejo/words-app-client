/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/words",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
