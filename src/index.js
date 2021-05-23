/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const moment = require('moment');
const path = require('path');
const sprintf = require('sprintf-js').sprintf;
const i18n = require('i18n');
const _ = require('lodash');

const pkg = require(path.resolve('package.json'));
const config = require('./config');
const logger = require('./utils/logger');
const routes = require('./routes');

const expressApp = express();
i18n.configure({
  locales: [config.app.locale],
  directory: __dirname + '/resources/translations',
});

/**
 * Initialize Server
 * Sets up the express server instances
 *
 * @returns {void}
 */
function start(app) {
  // Global variables
  global.APP_ENV = app.get('env');
  global.APP_NAME = _.get(pkg, 'name', '');
  global.APP_VERSION = _.get(pkg, 'version', '');
  global.APP_PORT = _.get(config, 'app.port', 3000);
  global.APP_ROOT = path.resolve(__dirname, '../../');

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use(logger.logAccess());
  app.use(routes.init());

  app.listen(APP_PORT, function() {
    logger.info(
      sprintf(i18n.__('server.start'), APP_PORT, APP_ENV)
    );
  });

  // Server status
  const logShutdown = function() {
    logger.info(
      sprintf(
        i18n.__('server.stop'),
        moment.duration(process.uptime(), 'seconds').humanize()
      )
    );
    process.exit(0);
  };

  process
    .removeAllListeners('SIGINT')
    .on('SIGINT', logShutdown)
    .removeAllListeners('SIGTERM')
    .on('SIGTERM', logShutdown);
}

start(expressApp);
