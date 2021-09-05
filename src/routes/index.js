/* eslint-disable no-unused-vars */

const appRoute = require('express').Router();

const favicon = require('../controllers/favicon');
const health = require('../controllers/health');
const { notFound, displayError } = require('../controllers/errors');
const v1 = require('./v1');

const init = (app) => {
  appRoute.use(favicon);
  appRoute.use(health);

  appRoute.use(v1.attach());
  appRoute.use('/v1', v1.attach());
  appRoute.use('/latest', v1.attach());

  appRoute.use(notFound);
  appRoute.use(displayError);

  return appRoute;
};

module.exports = {
  init,
};
