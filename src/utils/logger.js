/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

const morgan = require('morgan');

function logAccess() {
  return morgan(global.__appEnv !== 'development' ? 'combined' : 'dev');
}

function error(msg) {
  console.error(msg);
}

function info(msg) {
  console.info(msg);
}

function log(msg) {
  console.log(msg);
}

module.exports = {
  logAccess,
  error,
  info,
  log,
};
