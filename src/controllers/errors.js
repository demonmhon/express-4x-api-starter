function displayError(err, req, res, next) {
  res
    .status(500)
    .send({ 
      status: 'Error',
      error: err
    })
    .end();
}

module.exports = {
  displayError,
};
