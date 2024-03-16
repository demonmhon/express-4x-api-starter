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
    port: process.env.PORT ?? 80,
  },
};

export default config;
