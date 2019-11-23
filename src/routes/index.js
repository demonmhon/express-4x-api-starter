/* eslint-disable no-unused-vars */

const appRoute = require('express').Router();
const api = require('../controllers/api');
const errors = require('../controllers/errors');

const init = () => {
  const rpfx = '';
  const globalMiddlewares = [
    (req, res, next) => {
      res.setHeader('Content-Type', 'application/json');
      next();
    },
  ];

  appRoute.route(`${rpfx}/`).get(globalMiddlewares, api.getRoot);
  appRoute.route(`${rpfx}/health`).get(globalMiddlewares, api.getHealth);

  return appRoute;
};

const handleErrors = () => {
  appRoute.use(errors.displayError);

  return appRoute;
};

module.exports = {
  init,
  handleErrors
};
