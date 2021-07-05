const route = require('express').Router();
const api = require('../../controllers/v1/api');
const errors = require('../../controllers/errors');

function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) res.status(204).end();
  next();
}

function sendJson(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
}

const attach = (apiVersion) => {
  const v = apiVersion ? `/${apiVersion}` : '';
  const globalMW = [sendJson, ignoreFavicon];

  route.route(`${v}/`).get(globalMW, api.getHealth);
  route.route(`${v}/health`).get(globalMW, api.getHealth);

  return route;
};

module.exports = {
  attach: attach,
};
