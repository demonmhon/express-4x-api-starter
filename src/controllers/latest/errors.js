const i18n = require('i18n');
const sprintf = require('sprintf-js').sprintf;

function notFound(req, res, next) {
  res
    .status(404)
    .send({ 
      status: 'Error',
      error: sprintf(
        i18n.__('error.notFound'),
        req.url
      )
    })
    .end();
}

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
  notFound,
  displayError,
};
