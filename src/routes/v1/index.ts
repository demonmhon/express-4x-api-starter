import { Router } from 'express';

import { serve, spec, swaggerJSON } from '../../controllers/v1/docs-controller';
import userController from '../../controllers/v1/user-controller';

const routesV1 = () => {
  const router = Router();
  router.use('/docs', serve, spec);
  router.route('/swagger.json').get(swaggerJSON);

  router
    .route('/users')
    .get(userController.getAll)
    .post(userController.postUser);
  router.route('/users/:id?').get(userController.getById);

  return router;
};

export default routesV1;
