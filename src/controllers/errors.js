const util = require('util');
const i18n = require('i18n');
const _get = require('lodash/get');

const notFound = (req, res) => {
  res
    .status(404)
    .send({
      status: 'Error',
      error: util.format(i18n.__('error.notFound'), req.url),
    })
    .end();
};

const displayError = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  res
    .status(500)
    .send({
      status: 'Error',
      error: _get(err, 'message', {}),
    })
    .end();
};

module.exports = {
  notFound,
  displayError,
};
