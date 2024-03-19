import { Router, Request, Response } from 'express';

// const errors = require('../middlewares/errors');

const v1 = require('./v1');

const appRoutes = () => {
  const router = Router();

  // router.use(v1.useRoutes());
  // router.use('/v1', v1.useRoutes());
  // router.use('/latest', v1.useRoutes());
  // router.use(errors.handleNotFound);

  return router;
};

module.exports = appRoutes;
