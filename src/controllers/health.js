const route = require('express').Router();

const sendHealthReport = (req, res) => {
  res.status(200).send({ api: global.APP_NAME, status: 'OK' }).end();
};

route.route('/').get(sendHealthReport);
route.route('/health').get(sendHealthReport);

module.exports = route;
