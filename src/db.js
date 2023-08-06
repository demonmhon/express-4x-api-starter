const mongoose = require('mongoose');

const config = require('./config');
const logger = require('./utils/logger');

const { host, user, password, port, db } = config.mongodb;

async function connect() {
  try {
    const mongoDBURL = `mongodb://${user}:${password}@${host}:${port}/${db}?authSource=admin`;
    const conn = await mongoose.connect(mongoDBURL, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set('runValidators', true);

    logger.info(`Mongo connected: ${conn.connection.host}`);

    return mongoose.connection;
  } catch (error) {
    logger.error(`Mongo connection error: ${error}`);
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
