/* eslint-disable no-unused-vars */

const appRoute = require('express').Router();
const api = require('../controllers/api');

const init = () => {
  const rpfx = '';
  const globalMiddlewares = [
    (req, res, next) => {
      res.setHeader('Content-Type', 'application/json');
      next();
    }
  ];
  
  appRoute.route(`${rpfx}/`).get(globalMiddlewares, api.getHealth);

  return appRoute;
}

module.exports = {
  init
};
