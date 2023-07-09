/* eslint-disable no-undef */
const util = require('util');

const app = require('./app');
const logger = require('./utils/logger');

const server = app.listen(APP_PORT, function () {
  logger.info(
    util.format(
      'Express server listening on port %d in %s mode',
      APP_PORT,
      APP_ENV
    )
  );
  if (global.APP_ENV === 'development') {
    logger.info(util.format('Open http://localhost:%d', APP_PORT));
  }
});

// Graceful Shutdown
// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
const gracefulShutdown = () => {
  logger.debug('SIGINT/SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.debug('HTTP server closed');
  });
};

process
  .removeAllListeners('SIGINT')
  .on('SIGINT', gracefulShutdown)
  .removeAllListeners('SIGTERM')
  .on('SIGTERM', gracefulShutdown);
