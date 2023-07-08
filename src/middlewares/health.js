const router = require('express').Router();

const sendHealthReport = (req, res) => {
  res.status(200).send({ status: 'OK', api: global.APP_NAME }).end();
};

const handle = () => {
  router.route('/').get(sendHealthReport);
  router.route('/health').get(sendHealthReport);

  return router;
};

module.exports = {
  handle,
};
