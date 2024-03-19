import pkg from '../../package.json';

const getLogLevelValue = (env: string | undefined): string => {
  if (!env) {
    return 'info';
  }
  return ['development', 'dev'].includes(env) ? 'debug' : 'info';
};

const config = {
  env: process.env.NODE_ENV ?? 'development',
  logLevel: getLogLevelValue(process.env.NODE_ENV),
  app: {
    name: pkg.name ?? 'api',
    port: process.env.PORT ?? 3000,
  },
  mongodb: {
    host: process.env.MONGODB_HOST,
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    port: process.env.MONGODB_PORT,
    db: process.env.MONGODB_DATABASE,
  },
};

export default config;
