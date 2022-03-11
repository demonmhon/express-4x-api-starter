const { createLogger, format, transports } = require('winston');

const { env, logLevel } = require('../config');

const logger = createLogger({
  format: format.json(),
  transports: !['test'].includes(env)
    ? [
        new transports.Console({
          level: logLevel,
          format: format.combine(
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.colorize(),
            format.simple()
          ),
          handleExceptions: true,
        }),
      ]
    : [],
});

module.exports = logger;
