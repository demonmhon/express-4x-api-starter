/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const { createLogger, format, transports } = require('winston');
const { logLevel } = require('../config');

const logger = createLogger({
  format: format.json(),
  transports: [
    new transports.Console({
      level: logLevel,
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.colorize(),
        format.simple()
      ),
      handleExceptions: true,
    }),
  ],
});

module.exports = logger;
