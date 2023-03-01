import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

const config = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en','fr'],
    defaultLocale: 'en',
  },
};

const nextConfig = withPWA({
  dest: 'public',
  disable: false, //process.env.NODE_ENV === 'development', // production, true(disable SW in Production and Development), false(generate SW in Production and Development)
  register: true,
  scope: '/',
  skipWaiting: true,
  runtimeCaching,
  sw: 'service-worker.js',
})(
  config
);

export default nextConfig;