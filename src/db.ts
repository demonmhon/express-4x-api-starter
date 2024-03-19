import mongoose from 'mongoose';

import config from './config';
import logger from './utils/logger';

const { host, user, password, port, db } = config.mongodb;

export const connect = async () => {
  try {
    const mongoDBURL = `mongodb://${user}:${password}@${host}:${port}/${db}?authSource=admin`;
    const conn = await mongoose.connect(mongoDBURL, {
      keepAlive: true,
    });
    mongoose.set('runValidators', true);

    logger.info(`Mongo connected: ${conn.connection.host}`);

    return mongoose.connection;
  } catch (error) {
    logger.error(`Mongo connection error: ${error}`);
    process.exit(1);
  }
};

export const status = () => mongoose.STATES[mongoose.connection.readyState];

export default { connect, status };
