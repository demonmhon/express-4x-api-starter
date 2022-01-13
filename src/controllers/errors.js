const util = require('util');
const _get = require('lodash/get');
const { ResourceNotfound } = require('../utils/custom-errors');

const notFound = (req, res) => {
  res
    .status(404)
    .send({
      status: 'Error',
      code: 404,
      message: util.format('Resource %s not found', req.url),
    })
    .end();
};

const displayError = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  if ([ResourceNotfound.name].includes(err.name)) return notFound(req, res);
  res
    .status(500)
    .send({
      status: 'Error',
      code: 500,
      message: _get(err, 'message', {}),
    })
    .end();
};

module.exports = {
  notFound,
  displayError,
};
