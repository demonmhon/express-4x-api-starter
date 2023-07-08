const router = require('express').Router();

const docsController = require('../../controllers/v1/docs-controller');
const userController = require('../../controllers/v1/user-controller');

function sendJson(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
}

const useRoutes = () => {
  const globalMW = [sendJson];
  router.use('/docs', docsController.serve, docsController.spec);
  router.route('/swagger.json').get(docsController.swaggerJSON);

  router
    .route('/users')
    .get(globalMW, userController.getAll)
    .post(globalMW, userController.postUser);
  router.route('/users/:id?').get(globalMW, userController.getById);

  return router;
};

module.exports = {
  useRoutes,
};
