const route = require('express').Router();
const api = require('../../controllers/v1/api');
const errors = require('../../controllers/errors');

const attach = (apiVersion) => {
  const v = apiVersion ? `/${apiVersion}` : '';
  const globalMW = [
    (req, res, next) => {
      res.setHeader('Content-Type', 'application/json');
      next();
    },
  ];

  route.route(`${v}/`).get(globalMW, api.getRoot);
  route.route(`${v}/health`).get(globalMW, api.getHealth);

  return route;
};

module.exports = {
  attach: attach,
};
