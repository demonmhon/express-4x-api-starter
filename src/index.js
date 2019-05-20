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

const config = require('./config');
const logger = require('./utils/logger');
const routes = require('./routes');

const app = express();
i18n.configure({
  locales:[config.app.locale],
  directory: __dirname + '/resources/translations'
});

/**
 * Initialize Server
 * Sets up the express server instances
 *
 * @returns {void}
 */
function start() {
   // Global variables
   global.__appName = require(path.resolve('package.json')).name;
   global.__appRoot = path.resolve(__dirname, '../../');
   global.__appEnv = app.get('env');
   global.__appPort = global.__appEnv.PORT ? global.__appEnv.PORT : 3000;
   if (config.app.port) {
     global.__appPort = config.app.port;
   }

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.use(logger.logAccess());
  app.use(routes.init());

  app.listen(global.__appPort, function() {
    logger.info(
      sprintf(i18n.__('server.start'), global.__appPort, global.__appEnv)
    );
  });

  // Server status
  const logShutdown = function () {
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

start();
