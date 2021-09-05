const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('../../routes/v1/swagger.json');

const serve = swaggerUi.serve;

const spec = swaggerUi.setup(swaggerDoc);

const swaggerJSON = (req, res) => res.send(swaggerDoc);

module.exports = {
  serve,
  spec,
  swaggerJSON,
};
