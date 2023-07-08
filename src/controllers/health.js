const router = require('express').Router();

const sendHealthReport = (req, res) => {
  res.status(200).send({ api: global.APP_NAME, status: 'OK' }).end();
};

router.route('/').get(sendHealthReport);
router.route('/health').get(sendHealthReport);

module.exports = router;
