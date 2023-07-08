/* eslint-disable no-unused-vars */

const router = require('express').Router();

const health = require('../middlewares/health');
const favicon = require('../middlewares/favicon');

const v1 = require('./v1');

const appRoutes = () => {
  router.use(favicon.handle());
  router.use(health.handle());

  router.use(v1.useRoutes());
  router.use('/v1', v1.useRoutes());
  router.use('/latest', v1.useRoutes());

  return router;
};

module.exports = appRoutes;
