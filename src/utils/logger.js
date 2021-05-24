/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const _ = require('lodash');
const morgan = require('morgan');
const { createLogger, format, transports } = require('winston');

const loggerConfig = {
  format: format.json(),
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple()
      ),
      handleExceptions: true,
    }),
  ],
};
const accessLogger = createLogger({
  ...loggerConfig,
  transports: [
    ...loggerConfig.transports,
    new transports.File({
      filename: './logs/access.log',
      handleExceptions: true,
      maxsize: 2048,
      maxFiles: 20,
    }),
  ],
});

const debugLogger = createLogger({
  ...loggerConfig,
  transports: [
    ...loggerConfig.transports,
    new transports.File({
      filename: './logs/debug.log',
      handleExceptions: true,
      maxsize: 2048,
      maxFiles: 20,
    }),
  ],
});

function logAccess() {
  return morgan(global.APP_ENV !== 'development' ? 'combined' : 'tiny', {
    stream: {
      write: (message, encoding) => {
        accessLogger.info(message);
      },
    },
  });
}
module.exports = {
  logAccess,
  error: (message) => debugLogger.error(message),
  info: (message) => debugLogger.info(message),
  log: (message) => debugLogger.log(message),
};
