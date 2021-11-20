function getHealth(req, res) {
  res.status(200).send({ status: 'OK' }).end();
}

module.exports = {
  getHealth,
};
