/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: '/moia-design-bites',
        destination: 'https://codesandbox.io/s/moia-design-bites-c4lo1i',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
