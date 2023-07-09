const router = require('express').Router();
const util = require('util');
const _get = require('lodash/get');

const { ResourceNotfound, BadRequest } = require('../utils/custom-errors');

const handleNotFound = (req, res) => {
  const err = res.locals.err ? res.locals.err : null;
  const errors = ['Not found'];
  if (err && _get(err, 'message', null)) {
    errors.push(_get(err, 'message', null));
  }
  res
    .status(404)
    .send({
      code: 404,
      status: 'Error',
      message: util.format('Resource %s not found', req.url),
      errors,
    })
    .end();
};

const handleBadRequest = (err, req, res) => {
  res
    .status(400)
    .send({
      code: 400,
      status: 'Error',
      message: util.format('Cannot process the request for %s', req.url),
      errors: [_get(err, 'message', {})],
    })
    .end();
};

const handle = () => (err, req, res, next) => {
  if (res.headersSent) return next(err);
  switch (err.name) {
    case ResourceNotfound.name:
      res.locals.err = err;
      return handleNotFound(req, res);
    case BadRequest.name:
      return handleBadRequest(err, req, res);
    default:
      res
        .status(500)
        .send({
          code: 500,
          status: 'Error',
          message: _get(err, 'message', {}),
        })
        .end();
  }
};

module.exports = {
  handleNotFound,
  handle,
};
