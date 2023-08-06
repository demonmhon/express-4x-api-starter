const getLogLevelValue = (env) =>
  ['development', 'dev'].includes(env) ? 'debug' : 'info';

const config = {
  env: process.env.NODE_ENV,
  logLevel: getLogLevelValue(process.env.NODE_ENV),
  app: {
    port: process.env.PORT,
  },
  mongodb: {
    host: process.env.MONGODB_HOST,
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    port: process.env.MONGODB_PORT,
    db: process.env.MONGODB_DATABASE,
  },
};

module.exports = config;
