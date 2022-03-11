const morgan = require('morgan');
const { createLogger, format, transports } = require('winston');

const { env, logLevel } = require('../config');

const accessLogger = createLogger({
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

const logAccess = () =>
  morgan(env !== 'development' ? 'combined' : 'tiny', {
    stream: {
      write: (message) => accessLogger.info(message),
    },
  });

module.exports = logAccess;
