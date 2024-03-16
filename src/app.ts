/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';
import util from 'util';
import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import _get from 'lodash/get';

// import pkg from '../package.json';
import config from './config';
// import logAccess from './utils/log-access';
// import appRoutes from './routes/app';
// import errors from './middlewares/errors';

dotenv.config();

class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  public listen() {
    // Global variables
    const APP_ENV = _get(config, 'env', 'development');
    // global.APP_NAME = _get(pkg, 'name', '');
    const APP_PORT = 3000;

    this.app.use(compression());
    this.app.use(express.json());
    // this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());

    // this.app.use(logAccess());
    // this.app.use(appRoutes());
    // this.app.use(errors.handle());
    console.info(
      util.format(
        'Express server listening on port %d in %s mode',
        APP_PORT,
        APP_ENV
      )
    );
    if (APP_ENV === 'development') {
      console.info(util.format('Open http://localhost:%d', APP_PORT));
    }
  }
}

export default App;
