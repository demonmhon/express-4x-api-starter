const getLogLevelValue = (env) =>
  ['development', 'dev'].includes(env) ? 'debug' : 'info';

const config = {
  env: process.env.NODE_ENV,
  logLevel: getLogLevelValue(process.env.NODE_ENV),
  app: {
    port: process.env.PORT,
    mongoUrl: process.env.MONGODB_URL,
  },
};

module.exports = config;
