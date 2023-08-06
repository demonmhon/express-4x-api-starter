const mongoose = require('mongoose');

const config = require('./config');
const logger = require('./utils/logger');

async function connect() {
  try {
    const conn = await mongoose.connect(config.app.mongoUrl, {
      useNewUrlParser: true,
    });
    logger.info(`Mongo connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

function status() {
  return mongoose.STATES[mongoose.connection.readyState];
}

module.exports = {
  connect,
  status,
};
