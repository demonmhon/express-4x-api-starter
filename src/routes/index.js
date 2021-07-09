/* eslint-disable no-unused-vars */

const appRoute = require('express').Router();

const v1 = require('./v1');
const health = require('../controllers/health');
const errors = require('../controllers/errors');

const init = (app) => {
  appRoute.use(health);
  
  appRoute.use(v1.attach());
  appRoute.use('/v1', v1.attach());
  appRoute.use('/latest', v1.attach());

  appRoute.use(errors.notFound);
  appRoute.use(errors.displayError);

  return appRoute;
};

module.exports = {
  init,
};
