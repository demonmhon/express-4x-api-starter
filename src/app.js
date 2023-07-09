/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const util = require('util');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const _get = require('lodash/get');

const pkg = require(path.resolve('package.json'));
const config = require('./config');
const logAccess = require('./utils/log-access');
const appRoutes = require('./routes/app');
const errors = require('./middlewares/errors');

const app = express();

// Global variables
global.APP_ENV = _get(config, 'env', 'development');
global.APP_NAME = _get(pkg, 'name', '');
global.APP_PORT = _get(config, 'app.port', 80);
global.APP_ROOT = path.resolve(__dirname, '../../');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(appRoutes());
app.use(errors.handle());
app.use(logAccess());

module.exports = app;
