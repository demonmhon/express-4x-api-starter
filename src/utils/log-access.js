const morgan = require('morgan');
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
    : [
        new transports.Console({
          format: format.simple(),
        }),
      ],
});

const logAccess = () =>
  morgan(env !== 'development' ? 'combined' : 'tiny', {
    stream: {
      write: (message) => {
        logger.info(message);
      },
    },
    // Skip log for favicon
    skip: (req, res, next) => req.originalUrl.includes('favicon.ico'),
  });

module.exports = logAccess;
