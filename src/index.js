/* eslint-disable no-undef */
const util = require('util');

const app = require('./app');
const logger = require('./utils/logger');

app.listen(APP_PORT, function () {
  logger.info(
    util.format(
      'Express server listening on port %d in %s mode',
      APP_PORT,
      APP_ENV
    )
  );
});
