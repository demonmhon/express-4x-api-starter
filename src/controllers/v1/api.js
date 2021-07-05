function getHealth(req, res, next) {
  res.status(200).send({ status: 'OK' }).end();
}

module.exports = {
  getHealth,
};
