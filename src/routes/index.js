/* eslint-disable no-unused-vars */

const router = require('express').Router();

const favicon = require('../controllers/favicon');
const health = require('../controllers/health');
const errorRoutes = require('../controllers/errors');
const v1 = require('./v1');

const appRoutes = () => {
  router.use(favicon);
  router.use(health);

  router.use(v1.useRoutes());
  router.use('/v1', v1.useRoutes());
  router.use('/latest', v1.useRoutes());

  router.use(errorRoutes.handleNotFound);
  router.use(errorRoutes.handleError);

  return router;
};

module.exports = appRoutes;
