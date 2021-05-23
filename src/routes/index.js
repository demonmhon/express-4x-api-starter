/* eslint-disable no-unused-vars */

const appRoute = require('express').Router();
const latest = require('./latest');

const init = (app) => {
  appRoute.use(latest.attach(app, ''));
  appRoute.use(latest.attach(app, 'latest'));

  return appRoute;
};

module.exports = {
  init
};
