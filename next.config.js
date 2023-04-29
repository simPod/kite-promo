const isProd = process.env.NODE_ENV === 'production'

const basePrefix = process.env.BASE_PREFIX ?? '';
const baseUrl = process.env.BASE_URL ?? 'https://kite.podlipsky.net';

const env = {
  CANONICAL_URL: `${baseUrl}${basePrefix}`,
};

module.exports = {
  basePath: basePrefix,
  env,
};
