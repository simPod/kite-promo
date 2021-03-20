const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const isProd = process.env.NODE_ENV === 'production'

const basePrefix = process.env.BASE_PREFIX ?? '';
const baseUrl = process.env.BASE_URL ?? 'https://somolova.cz';

const env = {
  CANONICAL_URL: `${baseUrl}${basePrefix}`,
};

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
  }],
  {
    basePath: basePrefix,
    env,
  },
]);
