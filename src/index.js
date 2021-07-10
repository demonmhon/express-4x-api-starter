const util = require('util');
const i18n = require('i18n');

const app = require('./app');
const logger = require('./utils/logger');

app.listen(APP_PORT, function () {
  logger.info(util.format(i18n.__('server.start'), APP_PORT, APP_ENV));
});
