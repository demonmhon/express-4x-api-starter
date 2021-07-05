/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const morgan = require('morgan');
const { createLogger, format, transports } = require('winston');
const { env, logLevel } = require('../config');

const loggerConfig = {
  format: format.json(),
  transports: [
    new transports.Console({
      level: logLevel,
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
    maxsize: 10480,
    maxFiles: 10,
  };
}

const accessLogger = createLogger({
  ...loggerConfig,
  transports: [
    ...loggerConfig.transports,
    new transports.File(getLoggerFileConfig('access')),
  ],
});

const commonLogger = createLogger({
  ...loggerConfig,
  transports: [
    ...loggerConfig.transports,
    new transports.File({ ...getLoggerFileConfig('combined') }),
  ],
});

const logAccess = () => {
  return morgan(env !== 'development' ? 'combined' : 'tiny', {
    stream: {
      write: (message, encoding) => {
        accessLogger.info(message);
      },
    },
  });
};

module.exports = {
  logAccess,
  log: (message) => commonLogger.log(message),
  debug: (message) => commonLogger.debug(message),
  info: (message) => commonLogger.info(message),
  error: (message) => commonLogger.error(message),
};
