/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

require('dotenv').config();
const util = require('util');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const moment = require('moment');
const path = require('path');
const i18n = require('i18n');
const _get = require('lodash/get');

const pkg = require(path.resolve('package.json'));
const config = require('./config');
const accessLogger = require('./utils/access-logger');
const logger = require('./utils/logger');
const routes = require('./routes');

const expressApp = express();
i18n.configure({
  locales: [config.app.locale],
  directory: __dirname + '/resources/translations',
});
//
/**
 * Initialize Server
 * Sets up the express server instances
 *
 * @returns {void}
 */
function start(app) {
  // Global variables
  global.APP_ENV = _get(config, 'env', 'development');
  global.APP_NAME = _get(pkg, 'name', '');
  global.APP_PORT = _get(config, 'app.port', 3000);
  global.APP_ROOT = path.resolve(__dirname, '../../');

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  
  app.use(accessLogger());
  app.use(routes.init());

  app.listen(APP_PORT, function () {
    logger.info(util.format(i18n.__('server.start'), APP_PORT, APP_ENV));
  });

  // Server status
  const logShutdown = function () {
    logger.info(
      util.format(
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
