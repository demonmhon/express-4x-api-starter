const route = require('express').Router();
const api = require('../../controllers/latest/api');
const errors = require('../../controllers/latest/errors');

const attach = (apiVersion = 'latest') => {
  const v = `/${apiVersion}`;
  const globalMW = [
    (req, res, next) => {
      res.setHeader('Content-Type', 'application/json');
      next();
    },
  ];
  
  route.route(`${v}/`).get(globalMW, api.getRoot);
  route.route(`${v}/health`).get(globalMW, api.getHealth);
  route.use(errors.notFound);
  route.use(errors.displayError);

  return route
  
}

module.exports = {
  attach: attach,
}