const route = require('express').Router();

const docsController = require('../../controllers/v1/docs-controller');
const userController = require('../../controllers/v1/user-controller');

function sendJson(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
}

const attach = () => {
  const globalMW = [sendJson];
  route.use('/docs', docsController.serve, docsController.spec);
  route.route('/swagger.json').get(docsController.swaggerJSON);

  route.route('/users').get(globalMW, userController.getAll);
  route.route('/users/:id?').get(globalMW, userController.getById);

  return route;
};

module.exports = {
  attach: attach,
};
