const route = require('express').Router();

const userController = require('../../controllers/v1/user-controller');

function sendJson(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
}

const attach = () => {
  const globalMW = [sendJson];

  route.route('/users').get(globalMW, userController.getAll);
  route.route('/users/:id?').get(globalMW, userController.getById);

  return route;
};

module.exports = {
  attach: attach,
};
