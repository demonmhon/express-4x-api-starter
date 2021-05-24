/* eslint-disable no-unused-vars */

const appRoute = require('express').Router();
const latest = require('./v1');
const errors = require('../controllers/errors');

const init = (app) => {
  appRoute.use(latest.attach('v1'));
  appRoute.use(latest.attach(''));
  appRoute.use(latest.attach('latest'));

  appRoute.use(errors.notFound);
  appRoute.use(errors.displayError);

  return appRoute;
};

module.exports = {
  init,
};
