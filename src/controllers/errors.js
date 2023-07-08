const router = require('express').Router();
const util = require('util');
const _get = require('lodash/get');

const { ResourceNotfound, BadRequest } = require('../utils/custom-errors');

const handleNotFound = (req, res) => {
  res
    .status(404)
    .send({
      status: 'Error',
      code: 404,
      message: util.format('Resource %s not found', req.url),
    })
    .end();
};

const handleBadRequest = (req, res) => {
  res
    .status(400)
    .send({
      status: 'Error',
      code: 400,
      message: util.format('Cannot process the request for %s', req.url),
    })
    .end();
};

const handleError = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  if ([ResourceNotfound.name].includes(err.name))
    return handleNotFound(req, res);
  if ([BadRequest.name].includes(err.name)) return handleBadRequest(req, res);
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
  handleNotFound,
  handleError,
};
