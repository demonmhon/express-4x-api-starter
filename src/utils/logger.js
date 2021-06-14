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

function getLoggerFileConfig(name) {
  return {
    filename: `./logs/${name}.log`,
    handleExceptions: true,
    maxsize: 2048,
    maxFiles: 20,
  };
}

const accessLogger = createLogger({
  ...loggerConfig,
  transports: [
    ...loggerConfig.transports,
    new transports.File(getLoggerFileConfig('access'))
  ],
});

const debugLogger = createLogger({
  ...loggerConfig,
  transports: [
    ...loggerConfig.transports,
    new transports.File(getLoggerFileConfig('debug')),
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
