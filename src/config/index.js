const getLogLevelValue = (env) =>
  ['development'].includes(env) ? 'debug' : 'info';

const config = {
  env: process.env.NODE_ENV,
  logLevel: getLogLevelValue(process.env.NODE_ENV),
  app: {
    port: process.env.PORT,
    locale: process.env.LOCALE,
  },
};

module.exports = config;
