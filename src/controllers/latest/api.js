function getHealth(req, res, next) {
  res
    .status(200)
    .send({ status: 'OK' })
    .end();
}

function getRoot(req, res, next) {
  res
    .send({
      name: global.APP_NAME,
      version: global.APP_VERSION,
    })
    .end();
}

module.exports = {
  getHealth,
  getRoot,
};
