const route = require('express').Router();

const userController = require('../../controllers/v1/user-controller');

function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) res.status(204).end();
  next();
}

function sendJson(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
}

const attach = () => {
  const globalMW = [ignoreFavicon, sendJson];

  route.route('/users').get(globalMW, userController.getAll);
  route.route('/users/:id?').get(globalMW, userController.getById);

  return route;
};

module.exports = {
  attach: attach,
};
